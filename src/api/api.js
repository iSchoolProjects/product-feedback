import React from 'react'
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://zlaja.live:3006',
});
export const getFeedbacks = async (errCb) => {
    try {
        const { data } = await api.get('/feedbacks/');
        return data;
    } catch (error) {
        errCb()
    }
}

export const getFeedback = async (id, errCb) => {
    try {
        const { data } = await api.get(`/feedbacks/${id}`);
        return data;
    } catch (error) {
        errCb()
    }
}
export const createFeedback = async (body, errCb) => {
    try {
        const { data } = await api.post('/feedbacks/', { data: body });
        return data;
    } catch (error) {
        errCb()
    }
}

export const editFeedback = async (id, body, errCb) => {
    try {
        const { data } = await api.patch(`/feedbacks/${id}`, { data: body });
        return data;
    } catch (error) {
        errCb()
    }
}
export const deleteFeedback = async (id, errCb) => {
    try {
        const { data } = await api.delete(`/feedbacks/${id}`);
        return data;
    } catch (error) {
        errCb()
    }
}
export const upvoteFeedback = async (id, errCb) => {
    try {
        const { data } = await api.patch(`/feedbacks/${id}/upvote`);
        return data;
    } catch (error) {
        errCb()
    }
}
export const createComment = async (id, body, errCb) => {
    try {
        const { data } = await api.post(`/feedbacks/${id}/comments`, { data: body });
        return data;
    } catch (error) {
        errCb()
    }
}
export const createReply = async (id, comment, body, errCb) => {
    try {
        const { data } = await api.post(`/feedbacks/${id}/comments/${comment}/reply`, { data: body });
        return data;
    } catch (error) {
        errCb()
    }
}