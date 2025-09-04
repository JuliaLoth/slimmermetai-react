import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const GoogleCalendarContainer = styled.div`
  display: inline-block;
  
  /* Override Google Calendar default styles to match our button design */
  button,
  .calendar-scheduler-button,
  div[data-action="open"] {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    color: white !important;
    padding: 1rem 2rem !important;
    border-radius: 50px !important;
    text-decoration: none !important;
    font-weight: 600 !important;
    font-size: 1.1rem !important;
    border: none !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    font-family: 'Neue Montreal', 'Inter', sans-serif !important;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
    display: inline-block !important;
    min-width: auto !important;
    width: auto !important;
    height: auto !important;
    line-height: normal !important;
    
    &:hover,
    &:focus {
      transform: translateY(-3px) !important;
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4) !important;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    }
    
    &:active {
      transform: translateY(-1px) !important;
    }
  }
  
  /* Target any nested elements that might override styling */
  * {
    background: transparent !important;
    color: inherit !important;
    border: none !important;
    box-shadow: none !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  
  /* Ensure the main container has our styling */
  & > * {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    color: white !important;
    padding: 1rem 2rem !important;
    border-radius: 50px !important;
    font-weight: 600 !important;
    font-size: 1.1rem !important;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
  }
  
  /* Hide the default calendar icon if present */
  .calendar-scheduler-button::before,
  .calendar-scheduler-button .icon,
  svg,
  img {
    display: none !important;
  }
`;

const GoogleCalendarButton = ({ 
  url = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2KJICxJHxJ__0Esk8Q76cSe7TbfIqFSisVNR9abKPBiHczeWBClhTxrqYNax0hK7l7WYzVsCD8?gv=true',
  label = 'Een afspraak maken',
  color = '#667eea'
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadGoogleScheduler = () => {
      if (window.calendar && window.calendar.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: url,
          color: color,
          label: label,
          target: containerRef.current,
        });
      } else {
        // If Google Calendar script hasn't loaded yet, try again
        setTimeout(loadGoogleScheduler, 100);
      }
    };

    // Load the scheduler when component mounts
    const timer = setTimeout(loadGoogleScheduler, 100);

    return () => {
      clearTimeout(timer);
      // Clean up if needed
      const container = containerRef.current;
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [url, label, color]);

  return (
    <GoogleCalendarContainer>
      <div ref={containerRef}></div>
    </GoogleCalendarContainer>
  );
};

export default GoogleCalendarButton;