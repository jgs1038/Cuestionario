export const fetchQuestionnaireList = async () => {
    try {
        const response = await fetch('/questions/');
        if (!response.ok) throw new Error('Failed to fetch questions directory');

        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const links = Array.from(doc.querySelectorAll('a'));

        return links
            .map(link => link.getAttribute('href'))
            .filter(href => href.endsWith('.md'))
            .map(href => decodeURIComponent(href.replace(/^\/questions\//, ''))); // Clean up path if needed
    } catch (error) {
        console.error('Error fetching questionnaire list:', error);
        return [];
    }
};

export const fetchQuestionnaireContent = async (filename) => {
    try {
        // Ensure we don't double slash if filename already has it, but usually it's just the name
        const response = await fetch(`/questions/${filename}`);
        if (!response.ok) throw new Error('Failed to fetch file');
        return await response.text();
    } catch (error) {
        console.error('Error fetching questionnaire content:', error);
        return null;
    }
};
