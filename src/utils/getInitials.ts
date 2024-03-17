export const getInitials = (fullName: string) => {
    const words = fullName.split(' ');
    let initials = '';
    for (let i = 0; i < words.length; i++) {
        const initial = words[i].charAt(0).toUpperCase();
        initials += initial;
    }

    return initials;
}