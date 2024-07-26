<div class="container">
    <span class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-5 text-body-emphasis sticky-xl-top sticky-title" id="stickyElement2">Discover</span>
    <div class="mt-2 border-bottom border-secondary" id="stickyBorder2"></div>

    <div class="mt-3 row row-cols-1 row-cols-md-2 <?= $page === 'home' ? 'row-cols-lg-3' : 'row-cols-lg-4' ?> g-4">
        <?php if($page !== 'aboutme') : ?>
        <div class="col">
            <div class="card shadow-lg rounded">
                <a class="nav-link card-title" href="/aboutme">
                    <div class="bg-gradient-1 text-white text-center p-5 rounded-top">
                        <h4 class="card-title">Aldin Music</h4>
                    </div>
                </a>
                <div class="card-body">
                    <p class="card-text">Discover more about me—Aldin Music. This page includes information about my personal interests, experiences, and achievements. Click to learn more about my journey and what makes me tick.</p>
                </div>
            </div>
        </div>
        <?php endif; ?>
        <?php if($page !== 'parcours') : ?>
        <div class="col">
            <div class="card shadow-lg rounded">
                <a class="nav-link card-title" href="/parcours">
                    <div class="bg-gradient-2 text-white text-center p-5 rounded-top">
                        <h4 class="card-title">Parcours</h4>
                    </div>
                </a>
                <div class="card-body">
                    <p class="card-text">Explore my educational and professional journey. From high school to university, and my experiences working in parallel, this section provides insights into my career progression and growth.</p>
                </div>
            </div>
        </div>
        <?php endif; ?>
        <?php if($page !== 'projects') : ?>
        <div class="col">
            <div class="card shadow-lg rounded">
                <a class="nav-link card-title" href="/projects">
                    <div class="bg-gradient-5 text-white text-center p-5 rounded-top">
                        <h4 class="card-title">Projets</h4>
                    </div>
                </a>
                <div class="card-body">
                    <p class="card-text">Browse through the programming projects I have worked on so far. This page showcases my coding projects, including details about each project's goals, technologies used, and outcomes.</p>
                </div>
            </div>
        </div>
        <?php endif; ?>
        <?php if($page !== 'knowledge') : ?>
        <div class="col">
            <div class="card shadow-lg rounded">
                <a class="nav-link card-title" href="/connaissances">
                    <div class="bg-gradient-3 text-white text-center p-5 rounded-top">
                        <h4 class="card-title">Connaissances</h4>
                    </div>
                </a>
                <div class="card-body">
                    <p class="card-text">Gain insight into my skills and capabilities. This page details what I can do, including my expertise in various domains, competencies, and practical skills acquired over time.</p>
                </div>
            </div>
        </div>
        <?php endif; ?>
        <?php if($page !== 'bts') : ?>
        <div class="col">
            <div class="card shadow-lg rounded">
                <a class="nav-link card-title" href="/bts">
                    <div class="bg-gradient-4 text-white text-center p-5 rounded-top">
                        <h4 class="card-title">BTS</h4>
                    </div>
                </a>
                <div class="card-body">
                    <p class="card-text">Delve into my school experiences and achievements in each subject during my BTS program. This section outlines specific projects, assignments, and the knowledge gained throughout my studies.</p>
                </div>
            </div>
        </div>
        <?php endif; ?>
    </div>
</div>
