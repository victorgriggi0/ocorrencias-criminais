Foi alterado o nome da variável responsável por armazenar a opção se o usuário deseja manter-se logado ou não.
Antes era "rememberMe", agora será "isPersist"

A pasta "api" foi renomeada para "services", e foram adicionados novos serviços nela.
Foi adicionado um timeout no "index" do services, garantindo um tempo de resposta global para todas as requisições.
O tratamento de erro dos services também foram aprimorados, para lidar melhor com diferentes tipos de erros.

Foram feitas pequenas melhorias nos arquivos da pasta "utils"
