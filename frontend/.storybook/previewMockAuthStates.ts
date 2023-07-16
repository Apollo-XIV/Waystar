const defaultMockAuthStates = require('@tomfreudenberg/next-auth-mock').mockAuthStates;

module.exports = {
    ...defaultMockAuthStates,
    userAuthed: {
        title: 'user authenticated',
        session: {
            data: {
                user: {
                        id: 999,
                        name: 'Alex Crease',
                        email: 'user@local',
                        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/800px-Anas_platyrhynchos_male_female_quadrat.jpg'
                },
                expires: "test"
            },
            status: "authenticated"
        }
    }
}