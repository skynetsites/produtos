import http from 'node:http';

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/produtos') {
        return res.end(
            'ID: 1, Nome: Cerveja Heineken\n' +
            'ID: 2, Nome: Coca-Cola\n' +
            'ID: 3, Nome: Água Mineral'
        );
    }

    if (method === 'POST' && url === '/produto1') {
        return res.end('ID: 1, Nome: Cerveja Heineken');
    }

    if (method === 'POST' && url === '/produto2') {
        return res.end('ID: 2, Nome: Coca-Cola');
    }

    if (method === 'POST' && url === '/produto3') {
        return res.end('ID: 3, Nome: Água Mineral');
    }

    return res.end('Página inicial');
});

server.listen(3001);
