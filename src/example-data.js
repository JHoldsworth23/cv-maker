import uniqid from "uniqid"

export const exampleData = {
    personal: {
        fullName: 'Harry Du Bois',
        phoneNo: '+44 7843 348294',
        email: 'ummmwhatsemail@gmail.com',
        address: 'London, UK',
    },
    sections: {
        experience: [
            {
                id: uniqid(),
                companyName: 'WarioWare Inc.',
                role: 'Software Engineering',
                location: 'Diamond City',
                description: 'Developed and deployed robust software solutions, collaborating with cross-functional teams to meet business requirements and optimize performance. Led the design and implementation of scalable features, utilizing best practices in coding, testing, and version control to ensure high-quality software delivery.',
                startDate: '10/2023',
                endDate: '06/2024',
                isCollapsed: true,
            }, {
                id: uniqid(),
                companyName: 'WarioWare Inc. #2',
                role: 'Software Developer',
                location: 'Emerald City',
                description: '',
                startDate: '',
                endDate: '',
                isCollapsed: true,
            }
        ],
        education: [
            {
                id: uniqid(),
                school: 'University of London',
                study: 'BSc Computer Science',
                location: 'London, UK',
                startDate: '09/2022',
                endDate: 'Present',
            }, {
                id: uniqid(),
                school: 'Winterhold College',
                study: 'Sorcery',
                location: 'Winterhold, Skyrim',
                startDate: '11/2011',
                endDate: '11/2015'
            }
        ],
    }
}