import React from 'react';
import axios from 'axios';

export const tunesApi = {
    async getAll() {
        try {
            const response = await axios.get('https://itunes.apple.com/us/rss/topmusicvideos/limit=100/json', {})
            return response
        } catch (e) {
            console.log('Error:', e)
        }
    }
};
