import * as React from "react";
import { Route } from 'react-router-dom';
import FeedbackAnswer from "../components/feedBacks/FeedbackAnswer";
import LoginPage from "../components/LoginPage";

export default [
    // <Route path="/login" element={LoginPage} />,
    <Route key={'route-answer'} exact path="/feedbacks/:id/answer" component={FeedbackAnswer} />,
];