import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const App = () => {
    const [query, setQuery] = useState('');
    const [commands, setCommands] = useState([]);
    useEffect(() => {
        // TODO: Load commands from plugins
        setCommands([
            {
                id: '1',
                name: 'Search Google',
                description: 'Search Google for your query',
                action: () => window.open(`https://www.google.com/search?q=${query}`),
            },
            {
                id: '2',
                name: 'Open Settings',
                description: 'Open Blork settings',
                action: () => console.log('Opening settings...'),
            },
        ]);
    }, []);
    const filteredCommands = commands.filter((cmd) => cmd.name.toLowerCase().includes(query.toLowerCase()));
    return (_jsxs("div", { className: "w-full h-full bg-gray-900/95 text-white p-4 rounded-lg shadow-lg", children: [_jsx("input", { type: "text", value: query, onChange: (e) => setQuery(e.target.value), className: "w-full bg-transparent border-none outline-none text-xl mb-4", placeholder: "Type to search...", autoFocus: true }), _jsx("div", { className: "space-y-2", children: filteredCommands.map((cmd) => (_jsxs("div", { className: "p-2 hover:bg-gray-800 rounded cursor-pointer", onClick: cmd.action, children: [_jsx("div", { className: "font-medium", children: cmd.name }), _jsx("div", { className: "text-sm text-gray-400", children: cmd.description })] }, cmd.id))) })] }));
};
export default App;
