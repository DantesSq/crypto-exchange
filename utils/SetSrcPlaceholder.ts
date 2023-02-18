export const setSrcPlaceholder = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (event.target as HTMLImageElement).src = 'https://via.placeholder.com/35';
};
