export const MenuList = [
    {
        menu:'Home',
        url: '/'
    },
    {
        menu:'Profile',
        url: '/profile',
        children: [
            {
                menu:'Account',
                url: '/account'
            },
            {
                menu: 'Login',
                url:'/login',
            },
            {
                menu: 'Register',
                url:'/register',
            },

        ]
    },
    {
        menu: 'Programming',
        url:'/programming',
        children:[
            {
                menu:'Frontend',
                url:'/frontend',
                children:[
                    {
                        menu:'JavaScript',
                        url:'/javascript'
                    },
                    {
                        menu:'React.js',
                        url:'/reactjs',
                        children:[
                            {
                                menu:'Functional component',
                                url:'/f-comp'
                            },
                            {
                                menu:'Class Component',
                                url:'c-comp'
                            }
                        ]
                    },
                ]
            },
            {
                menu:'Backend',
                url:'/backend',
                children:[
                    {
                        menu:'Node.js',
                        url:'/node',
                    },
                    {
                        menu:'MongoDB',
                        url:'/mongodb',
                    }
                ]
            }
        ]
    }
];