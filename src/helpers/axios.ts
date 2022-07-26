import axios from "axios";
import MockAdaptor from "axios-mock-adapter";
//All axios related code

//Create axios instance
export const api = axios.create({
  baseURL: "https://api.foursquare.com/v3",
  headers: {
    //Should be kept in .env for local and environment variables of CI/CD Pipeline
    Authorization: "fsq37bPXSaW8IljjjY49FQFnQ1PcRnA2dcH0OAcnqyvB7GA=",
  },
});

//Mock adapter for mock data (test-cases)
export const mockApi = new MockAdaptor(axios);
