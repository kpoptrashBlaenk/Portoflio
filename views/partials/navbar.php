<div class="bg-body bg-opacity-75 sticky-top blur-back-10">
    <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 pb-2 border-bottom mb-4 border-secondary">
            <div class="col-md-3 mb-1 mb-md-0 d-none d-lg-block">
                <button class="btn d-inline-flex" id="toggle-theme">
                    <i class="fa fa-moon" id="theme-icon"></i>
                </button>
            </div>

            <ul class="nav nav-underline col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" class="nav-link px-2 <?= $page === 'home' ? 'active link-secondary' : ''?>">Home</a></li>
                <li><a href="/parcours" class="nav-link px-2 <?= $page === 'parcours' ? 'active link-secondary' : ''?>">Parcours</a></li>
                <li><a href="/projects" class="nav-link px-2 <?= $page === 'projects' ? 'active link-secondary' : ''?>">Projets</a></li>
                <li><a href="/knowledge" class="nav-link px-2 <?= $page === 'knowledge' ? 'active link-secondary' : ''?>">Connaissances</a></li>
                <li><a href="/bts" class="nav-link px-2 <?= $page === 'bts' ? 'active link-secondary' : ''?>">BTS</a></li>
            </ul>

            <div class="col-md-3 text-end d-none d-lg-block">
                <a href="/aboutme" class="nav-link px-2"><span class="rainbow_text_animated">Aldin Music</span></a>
            </div>
        </header>
    </div>
</div>
