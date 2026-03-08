//  Middleware de rede. Aqui colocamos a lógica que 'grampeia' cada requisição para
//  injetar o JWT automaticamente e trata erros globais, como redirecionar para o
//  login se o token expirar (erro 401)