import { 
    type RouteConfig, 
    index,
    layout,
    route,
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    layout("routes/services/layout.tsx", [
        route("services", "routes/services/home.tsx"),
    ]),

    route("portfolio", "routes/portfolio.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx")
] satisfies RouteConfig;
