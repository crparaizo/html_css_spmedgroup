render() {
    return (

        <header>
            <div class="topo">
                <div class="topo__quebra"></div>
                <h1 class="topo__h1">Consultas</h1>
                <div class="topo__quebra topo__quebra--modificado"></div>
                <label for="">
                    <input class="topo__item" type="text" placeholder="Buscar por Especialidade..." />
                </label>
                <label for="">
                    <input class="topo__item" type="text" placeholder="Buscar por Médico..." />
                </label>
                <label for="">
                    <input class="topo__item" type="text" placeholder="Buscar por Paciente/Prontuário..." />
                </label>
                <label for="">
                    <input class="topo__item" type="text" placeholder="Buscar por Data..." />
                </label>
                <label for="">
                    <input class="topo__item" type="text" placeholder="Buscar por ID..." />
                    {/* <!-- Colocar icon de lupa? --> */}
                </label>
                <button class="topo__button">Limpar</button>
            </div>
        </header>
        <aside>
            <div class="menu">
                <h3 class="menu__titulo">Administrador</h3>
                <img class="menu__imagem" src="../img/icon-login.png" alt="" />
                {/* <!-- IMAGEM --> */}
                <div class="links">
                    <nav>
                        <ul>
                            {/* <!-- Colocar URL's -->
                        <!-- Páginas de médico e paciente terão menos links --> */}
                            <li class="links__item"><a class="links__titulo" href="#">Prontuários</a></li>
                            <div class="links__quebra"></div>
                            <li class="links__item"><a class="links__titulo links__titulo--selecionado"
                                href="#">Consultas</a></li>
                            <div class="links__quebra"></div>
                            <li class="links__item"><a class="links__titulo" href="#">Clínicas</a></li>
                            <div class="links__quebra"></div>
                            <li class="links__item"><a class="links__titulo" href="#">Médicos</a></li>
                            <div class="links__quebra"></div>
                            <li class="links__item"><a class="links__titulo" href="#">Usuários</a></li>
                            <div class="links__quebra"></div>
                            <li class="links__item"><a class="links__titulo" href="#">Especialidades</a></li>
                            <div class="links__quebra"></div>
                        </ul>
                    </nav>
                </div>
                {/* <!-- Escolher um deles: --> */}
                <a class="menu__link" href="#">Sair</a>
                {/* <!-- <button>Sair</button> --> */}
            </div>
        </aside>
        <main class="listas">
            {/* <!-- Configuração Tab Html! -->
        <!-- (button)openPage("Nome") tem que ser igual (div/table)id="Nome" --> */}
            <button class="listas__button listas__button--lista tablink" onclick="openPage('Lista')"
                id="defaultOpen">Lista</button>

            <button class="listas__button listas__button--cadastrar tablink"
                onclick="openPage('Cadastrar')">Cadastrar+</button>

            <div class="contorno">
                <div id="Lista" class="tabela tabcontent">
                    <table class="tabela__real">
                        <thead class="tabela-head">
                            <tr>
                                <th class="tabela-head__titulo">Consulta(ID)</th>
                                <th class="tabela-head__titulo">Data</th>
                                <th class="tabela-head__titulo">Paciente</th>
                                <th class="tabela-head__titulo">Médico</th>
                                <th class="tabela-head__titulo">Especialidade</th>
                                {/* <!-- <a href="#">Alterar</a> --> */}
                            </tr>
                        </thead>
                        <tbody class="tabela-body">
                            <tr>
                                <td class="tabela-body_dado">{consulta.id}</td>
                                <td class="tabela-body_dado">{consulta.data}</td>
                                <td class="tabela-body_dado">{consulta.paciente / prontuario}</td>
                                <td class="tabela-body_dado">{consulta.medico}</td>
                                <td class="tabela-body_dado">{consulta.especialidade}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="botoes">
                        <button class="botoes__item botoes__item--alterar">Alterar</button>
                        <button class="botoes__item botoes__item--deletar">Deletar</button>
                    </div>
                </div>
                <div id="Cadastrar" class="formulario tabcontent" style="display:none">
                    <label for=""><input class="formulario__item" type="text" placeholder="Nome do Paciente" /></label>
                    {/* <!-- <label for=""><input class="formulario__item" type="text" placeholder="ID do Paciente" /></label> --> */}
                    {/* <!-- FAZER UMA COIXA DE SELEÇÃO? --> */}
                    <label for=""><input class="formulario__item" type="text" placeholder="Nome do Médico" /></label>
                    {/* <!-- <label for=""><input class="formulario__item" type="text" placeholder="ID do Médico" /></label> --> */}
                    <label for=""><input class="formulario__item" type="text" placeholder="Data da Consulta" /></label>
                    <label for=""><input class="formulario__item" type="text" placeholder="Descrição" /></label>
                    <button class="formulario__button">Enviar</button>
                </div>
            </div>
        </main>

    // {/* <script>
    //     function openPage(namePage) {
    //         var i;
    //         var x = document.getElementsByClassName("tabcontent");
    //         for (i = 0; i < x.length; i++) {
    //             x[i].style.display = "none";
    //         }
    //         document.getElementById(namePage).style.display = "flex";
    //     }
    // </script> */}

    )
}