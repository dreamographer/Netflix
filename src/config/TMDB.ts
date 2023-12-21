const token = import.meta.env.VITE_MOVIE_API_KEY
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

export default config