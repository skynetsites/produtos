import http from 'node:http';

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/produtos') {
        return res.end(
            'ID: 1, Nome: Cerveja Heineken\n' +
            'ID: 2, Nome: Coca-Cola'
        );
    }

    if (method === 'GET' && url === '/produto1') {
        return res.end('ID: 1, Nome: Cerveja Heineken');
    }

    if (method === 'GET' && url === '/produto2') {
        return res.end('ID: 2, Nome: Coca-Cola');
    }

    return res.end('Página inicial');
});

server.listen(3001);