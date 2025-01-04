
// 抓圖片
export function getImageTeam(teamId) {
    try {
        return require(`../assets/team_logos/${teamId}.png`);
    } catch (error) {
        return require(`../assets/team_logos/0.png`);
    }
}

// 抓國家圖片
export function getImageCountry(countryId) {
    try {
        return require(`../assets/count_logos/${countryId}.svg`);
    } catch (error) {
        return require(`../assets/count_logos/1.svg`);
    }
}