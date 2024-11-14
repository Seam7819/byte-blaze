
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-slate-200 text-base-content rounded p-1 md:p-3 lg:p-3">
                
                <aside>
                    <p className="text-slate-950 text-xs md:text-base">Copyright © {new Date().getFullYear()} - All right reserved by ByteBlaze Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;