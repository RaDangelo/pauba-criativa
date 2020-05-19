export interface Configuration {
    title: string,
    name: string,
    surname: string,
    creationYear: string,
    siteDescription: string,
    link1: string,
    link2: string,
    email: string,
    phoneNumber: string,
    instagram: string,
    behanceUrl: string,
    formUrl: string,
    fiverrUrl: string,
    hashtags: [],
    mainPhrase: string,
    mainDescription: string,
    projects: Projects[]
}

interface Projects {
    image: string,
    url: string
}