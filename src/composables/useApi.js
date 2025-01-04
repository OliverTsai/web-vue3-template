// 抓大量資料的API
export const fetchPosts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();  // 確保將響應轉換為JSON
        return data
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
