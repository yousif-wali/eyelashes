<style>
    *{
        margin:0;
        padding:0;
    }
    header[data-type="Header"]{
        display:flex;
        position:fixed;
        top:0;
        z-index:1;
        background-color:white;
        width:100%;
        height:40px;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid black;
    }
    header[data-type="Header"] > *{
        padding: 0 1em;
    }
</style>
<header data-type="Header">
    <section>
        Link Part #1
    </section>
    
    <section>
        Logo
    </section>
    
    <section>
        Link Part #2
    </section>
</header>