// 抓隊伍圖片
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

export const fetchAllPosts = async (url, selectButtonValue) => {
    try {
        const response = await fetch(url);
        const data = await response.json(); // 確保將響應轉換為 JSON
        let filteredData = data;

        if (selectButtonValue === 'schedule') {
            filteredData.matchList = data.matchList.filter(post => post.state === 0);
        } else if (selectButtonValue === 'finished') {
            filteredData.matchList = data.matchList.filter(post => post.state === -1);
        }
        return filteredData;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};

export const bkFetchAllPosts = async (url, selectButtonValue) => {
    try {
        const response = await fetch(url);
        const data = await response.json(); // 確保將響應轉換為 JSON
        let filteredData = data;

        if (selectButtonValue === 'schedule') {
            filteredData.matchList = data.matchList.filter(post => post.matchState === 0);
        } else if (selectButtonValue === 'finished') {
            filteredData.matchList = data.matchList.filter(post => post.matchState === -1);
        }
        return filteredData;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};
