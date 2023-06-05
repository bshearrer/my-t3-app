# Gitwit React Tech Stack

## Primary Technologies

-   [Typescript](https://typescriptlang.org) (Language)
-   [Next.js](https://nextjs.org) (React Framework)
-   [MUI](https://mui.com) (React UI Framework)
-   [Prisma](https://prisma.io) (Database ORM)
-   [MongoDB](https://mongodb.com) (Database)
-   [Clerk](https://clerk.dev) (Authentication)
-   [tRPC](https://trpc.io) (RPC Framework)
-   [Tanstack-Query](https://tanstack.com/query/latest) (Query Library)
-   [Zod](https://zod.dev/) (Schema Validation)
-   [React-Hook-Form](https://react-hook-form.com/) (Form Validation)

### Additional Choices To Consider

-   [Date-FNS](https://date-fns.org) (Date Utility Library)
-   [React-Use](https://streamich.github.io/react-use/) (React Hooks Library)
-   [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) (State Management)
-   [Lodash](https://lodash.com/) (Utility Library)

## What's Included?

### Auth, _Clerk_

-   Public / Private Pages Routes Array ([middleware.ts](./src/middleware.ts))
-   RBAC
    -   SideNav can render items based on user role ([SideNavDrawer.tsx](./src/components/shared/layouts/sidenav/SideNavDrawer.tsx))
    -   Page can render based on user role with getServerSideProps ([index.tsx](./src/pages/admin/index.tsx)) ...idea from seth's project
    -   Logged In & Admin protected api routes ([trpc.ts](./src/server/api/trpc.ts))

### Component Library, _MUI_

-   Example dialog component opened / closed based on router change ([DialogExample.tsx](./src/components/home/DialogExample.tsx))
-   Global Layout with a simple `<SideNavDrawer />` component ([GlobalLayout.tsx](./src/components/shared/layouts/GlobalLayout.tsx))
-   Example form with validation using react-hook-form ([AddLocationForm.tsx](./src/components/location/AddLocationForm.tsx))
-   Custom alert popup hook ([useAlert.ts](./src/hooks/useAlert.ts))
