export const setMetaTags = (title: string, description: string, keywords: string) => {
    const metaTitle = document.createElement('title');
    metaTitle.innerText = title;
    document.head.appendChild(metaTitle);

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = description;
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = keywords;
    document.head.appendChild(metaKeywords);
};

export const setCanonicalLink = (url: string) => {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    document.head.appendChild(link);
};