import { Navbar } from "./_components/navbar";
import { SideBar } from "./_components/sidebar";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return ( <div className="h-full">
        {/****Header****/}
        <header className="h-20 md:pl-56 fixed inset-y-0 w-full z-50">
            <Navbar />
        </header>


        {/****SideBar****/}
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
          <SideBar />
          
          
        </div>

        <main className="md:pl-56 pt-20 h-full">{children}</main>
         
    </div> );
}
 
export default DashboardLayout;