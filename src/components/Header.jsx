import NavBar from "./Nav";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expanf-lg navbar-light bg-light fixed-top">
                <div className="container-fluid d-flex align-items-center">
                    <h1 className="navbar-brand mb-0">Christian Walterson</h1>
                    <NavBar />
                </div>
            </nav>
        </header>
    );
}