import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FeedContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
`;

const ErrorState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #e53e3e;
  background: #fff5f5;
  border-radius: 8px;
  border: 1px solid #feb2b2;
`;

const ArticleItem = styled.article`
  display: flex;
  gap: 1.5rem;
  padding: 2rem 0;
  border-bottom: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(4px);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ArticleImage = styled.div`
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 200px;
  }
`;

const ArticleContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ArticleTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  line-height: 1.3;
  font-family: 'Neue Montreal', 'Inter', sans-serif;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #5852f2;
    }
  }

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

const ArticleExcerpt = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: auto;
`;

const ArticleDate = styled.span`
  &::before {
    content: "•";
    margin-right: 0.75rem;
  }
`;

const ReadMoreLink = styled.a`
  color: #5852f2;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: gap 0.2s ease;

  &:hover {
    gap: 0.5rem;
  }

  &::after {
    content: "→";
  }
`;

const SubstackFeed = ({ feedUrl = 'https://slimmermetai.substack.com/feed', maxPosts = 10 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setLoading(true);

        // Fetch RSS feed via rss2json API (more reliable for RSS)
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch feed');
        }

        const data = await response.json();

        if (data.status !== 'ok') {
          throw new Error(data.message || 'RSS feed error');
        }

        // Parse JSON response from rss2json
        const parsedPosts = data.items.slice(0, maxPosts).map(item => {
          // Extract title
          const title = item.title || 'Untitled';

          // Extract link
          const link = item.link || '#';

          // Extract description (excerpt)
          const description = item.description || '';
          // Strip HTML tags from description
          const excerpt = description.replace(/<[^>]*>/g, '').substring(0, 200) + '...';

          // Extract date
          const pubDate = item.pubDate || '';
          const formattedDate = pubDate ? new Date(pubDate).toLocaleDateString('nl-NL', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }) : '';

          // Extract image from thumbnail or enclosure
          let imageUrl = item.thumbnail || item.enclosure?.link || '';

          // If no image, try to extract from content/description
          if (!imageUrl) {
            const imgMatch = (item.content || item.description || '').match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch) {
              imageUrl = imgMatch[1];
            }
          }

          return {
            title,
            link,
            excerpt,
            date: formattedDate,
            image: imageUrl,
          };
        });

        setPosts(parsedPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching Substack feed:', err);
        setError('Kon de nieuwsbrief niet laden. Probeer het later opnieuw.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [feedUrl, maxPosts]);

  if (loading) {
    return (
      <LoadingState>
        <div>Nieuwsberichten laden...</div>
      </LoadingState>
    );
  }

  if (error) {
    return (
      <ErrorState>
        <strong>Oeps!</strong> {error}
      </ErrorState>
    );
  }

  if (posts.length === 0) {
    return (
      <LoadingState>
        Nog geen artikelen beschikbaar.
      </LoadingState>
    );
  }

  return (
    <FeedContainer>
      {posts.map((post, index) => (
        <ArticleItem key={index}>
          {post.image && (
            <ArticleImage>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img src={post.image} alt={post.title} loading="lazy" />
              </a>
            </ArticleImage>
          )}
          <ArticleContent>
            <ArticleTitle>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </ArticleTitle>
            <ArticleExcerpt>{post.excerpt}</ArticleExcerpt>
            <ArticleMeta>
              <span>Julia Loth</span>
              {post.date && <ArticleDate>{post.date}</ArticleDate>}
              <ReadMoreLink href={post.link} target="_blank" rel="noopener noreferrer">
                Lees meer
              </ReadMoreLink>
            </ArticleMeta>
          </ArticleContent>
        </ArticleItem>
      ))}
    </FeedContainer>
  );
};

export default SubstackFeed;
