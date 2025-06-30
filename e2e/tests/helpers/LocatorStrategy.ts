const byText = (text: string) => {
   return driver.isIOS ? `~${text}` : `//*[@text="${text}"]`;
}

const byPlatformA11y = ({ios, android}:{ ios: string, android: string }) => {
    return driver.isIOS ? ios : android;
}

const byLabel = (label: string) => {
    return `//*[@label="${label}"]`;
}

export {
    byText,
    byPlatformA11y,
    byLabel
}
