import { gapi } from "gapi-script";
import { useEffect } from "react";

const SCOPES = "https://www.googleapis.com/auth/calendar.events";
const CLIENT_ID = "468751004067-iatrc8g18rvoj4fggq9enj176velg9qt.apps.googleusercontent.com";
const API_KEY = "AIzaSyA8XOn-q4kcM0YAURdjnIx2DHY_R8KwSSw";

const GoogleCalendarService = () => {
  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
          scope: SCOPES,
        })
        .then(() => {
          console.log("Google Calendar API ready!");
        })
        .catch((err) => console.error("Error initializing Google API:", err));
    };

    gapi.load("client:auth2", initClient);
  }, []);

  const createEvent = async (eventDetails) => {
    try {
      const response = await gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: eventDetails,
      });
      console.log("Event created:", response);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return { createEvent };
};

export default GoogleCalendarService;
