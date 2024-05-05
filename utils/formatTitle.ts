const formatTitle = (title: string): string => {
    const splitDelimiter = "-";
    const joinDelimiter = " ";
    const words = title.split(splitDelimiter);
    const transformUpperCaseOnlyTheFirstLetter = words.map(
        // this line will uppercase the first letter
        (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
    );
    return transformUpperCaseOnlyTheFirstLetter.join(joinDelimiter);
};

export default formatTitle;
