import { BarChartSharp, CallToAction, Dashboard, People, Person, ShoppingBag, ShoppingCart } from "@mui/icons-material";

export const MenuData = ([
    {
        id: 1,
        title:"Main",
        listItem:[
            {
                icon: <Dashboard sx={{fontSize:"12px"}}/>,
                name: "Dashboard"
            },
            {
                icon: <Person sx={{fontSize:"12px"}}/>,
                name: "profile"
            },
        ]
    },
    {
        id: 2,
        title:"List",
        listItem:[
            {
                icon: <People sx={{fontSize:"12px"}}/>,
                name: "Users"
            },
            {
                icon: <ShoppingBag sx={{fontSize:"12px"}}/>,
                name: "Products"
            },
            {
                icon: <ShoppingCart sx={{fontSize:"12px"}}/>,
                name: "Orders"
            },
        ]
    },
    {
        id: 3,
        title:"Analysis",
        listItem:[
            {
                icon: <BarChartSharp sx={{fontSize:"12px"}}/>,
                name: "Charts"
            },
            {
                icon: <CallToAction sx={{fontSize:"12px"}}/>,
                name: "logs"
            },
            {
                icon: <Person sx={{fontSize:"12px"}}/>,
                name: "Orders"
            },
        ]
    },
    {
        id: 3,
        title:"Analysis",
        listItem:[
            {
                icon: <BarChartSharp sx={{fontSize:"12px"}}/>,
                name: "Charts"
            },
            {
                icon: <CallToAction sx={{fontSize:"12px"}}/>,
                name: "logs"
            },
            {
                icon: <Person sx={{fontSize:"12px"}}/>,
                name: "Orders"
            },
        ]
    },
])