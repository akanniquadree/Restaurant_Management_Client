import { BarChartSharp, CallToAction, Dashboard, People, Person, ShoppingBag, ShoppingCart } from "@mui/icons-material";

export const MenuData = ([
    {
        id: 1,
        title:"Main",
        listItem:[
            {
                icon: <Dashboard sx={{fontSize:"12px"}}/>,
                name: "Dashboard",
                link : "/admin"
            },
            {
                icon: <Person sx={{fontSize:"12px"}}/>,
                name: "profile",
                link: "/admin/users"
            },
        ]
    },
    {
        id: 2,
        title:"List",
        listItem:[
            {
                icon: <People sx={{fontSize:"12px"}}/>,
                name: "Users",
                link: "/admin/users"
            },
            {
                icon: <ShoppingBag sx={{fontSize:"12px"}}/>,
                name: "Products",
                link: "/admin/products"
            },
            {
                icon: <ShoppingCart sx={{fontSize:"12px"}}/>,
                name: "Orders",
                link: "/admin/users"
            },
        ]
    },
    {
        id: 3,
        title:"Analysis",
        listItem:[
            {
                icon: <BarChartSharp sx={{fontSize:"12px"}}/>,
                name: "Charts",
                link: "/admin/users"
            },
            {
                icon: <CallToAction sx={{fontSize:"12px"}}/>,
                name: "logs",
                link: "/admin/users"
            },
            {
                icon: <Person sx={{fontSize:"12px"}}/>,
                name: "Orders",
                link: "/admin/users"
            },
        ]
    },
    {
        id: 3,
        title:"Analysis",
        listItem:[
            {
                icon: <BarChartSharp sx={{fontSize:"12px"}}/>,
                name: "Charts",
                link: "/admin/users"
            },
            {
                icon: <CallToAction sx={{fontSize:"12px"}}/>,
                name: "logs",
                link: "/admin/users"
            },
            {
                icon: <Person sx={{fontSize:"12px"}}/>,
                name: "Orders",
                link: "/admin/users"
            },
        ]
    },
])