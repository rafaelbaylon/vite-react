import './App.css'

const sidebarItems = [
    { label: 'Dashboard', key: 'dashboard' },
    { label: 'Posts', key: 'posts' },
    { label: 'Gallery', key: 'gallery' },
    { label: 'About', key: 'about' },
    { label: 'Settings', key: 'settings' },
];

const Sidebar: React.FC = () => (
    <aside style={{
        width: '220px',
        background: '#f5f6fa',
        padding: '1.5rem 1rem',
        height: '100vh',
        boxSizing: 'border-box',
        borderRight: '1px solid #e1e4ea'
    }}>
        <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {sidebarItems.map(item => (
                    <li key={item.key} style={{ margin: '1rem 0' }}>
                        <a
                            href={`#${item.key}`}
                            style={{
                                textDecoration: 'none',
                                color: '#333',
                                fontWeight: 500,
                                fontSize: '1rem',
                                padding: '0.5rem 1rem',
                                display: 'block',
                                borderRadius: '4px',
                                transition: 'background 0.2s'
                            }}
                            onMouseOver={e => (e.currentTarget.style.background = '#e9ecef')}
                            onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
);

export default Sidebar;