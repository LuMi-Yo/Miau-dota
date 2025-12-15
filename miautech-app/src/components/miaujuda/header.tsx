
export function Header(){
        {/* Colocar as imagens no storage do supabase e mudar aqui */}
        {/* usar o link no lugar do a href para mudar de páginas */}

    return ( 
        <header>
            <div className="imgs-header">
            <img src="../imgs/miaujuda/Dog1-mascara.png" alt="dog1" id="dog1" />
            <img src="../imgs/miaujuda/Logo-miaujuda.png" alt="logo" id="logo" />
            </div>
            <div className="options">

            <a href="">Miau-Dota</a>
            <a href="">Perdi meu pet</a>
            <a href="">Achei um pet</a>
            <a href="">
                <img
                src="../imgs/miaudota/user-base.png"
                alt="base-user-profile"
                id="user"
                />
                </a>

            </div>
        </header>
    )
}