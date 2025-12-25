export const generateKeywords = (): string[] => {
    // 1. Core Identifiers & Typos (The "Atom" level)
    const core = [
        "github", "git", "guthab", "gethub", "gihub", "githup", "githu", "git hub", "git-hub",
        "gitab", "gitalb", "gitub", "gthub", "g@thub", "githubb", "gh", "repo host", "code host"
    ];

    // 2. Technologies (Languages, Frameworks, Tools) - Exhaustive List
    const languages = [
        "javascript", "js", "typescript", "ts", "python", "py", "java", "c", "c++", "cpp", "c#", "csharp",
        "ruby", "rb", "php", "go", "golang", "swift", "kotlin", "rust", "rs", "scala", "perl", "lua",
        "r", "dart", "elixir", "haskell", "julia", "objective-c", "obj-c", "shell", "bash", "zsh",
        "powershell", "ps1", "assembly", "asm", "matlab", "vba", "groovy", "clojure", "f#", "fortran"
    ];

    const frameworks = [
        "react", "reactjs", "vue", "vuejs", "angular", "angularjs", "svelte", "nextjs", "next.js",
        "nuxt", "nuxtjs", "gatsby", "remix", "astro", "django", "flask", "fastapi", "spring", "spring boot",
        "rails", "ruby on rails", "laravel", "symfony", "codeigniter", "express", "expressjs", "fastify",
        "nestjs", "asp.net", ".net", "blazor", "tensorflow", "pytorch", "keras", "pandas", "numpy",
        "flutter", "react native", "ionic", "electron", "tauri", "qt", "gtk", "bootstrap", "tailwind", "sass"
    ];

    const tools = [
        "docker", "kubernetes", "k8s", "aws", "amazon web services", "azure", "gcp", "google cloud",
        "firebase", "vercel", "netlify", "heroku", "digitalocean", "jenkins", "circleci", "travis ci",
        "github actions", "gitlab ci", "bitbucket pipelines", "mongodb", "mysql", "postgresql", "postgres",
        "redis", "sqlite", "mariadb", "oracle", "sql server", "vscode", "visual studio code", "intellij",
        "vim", "neovim", "emacs", "unity", "unreal engine", "godot", "blender", "figma", "sketch"
    ];

    const concepts = [
        "ci/cd", "devops", "agile", "scrum", "kanban", "waterfall", "testing", "unit testing", "e2e",
        "frontend", "backend", "fullstack", "full stack", "mobile dev", "web dev", "game dev",
        "data science", "machine learning", "ai", "artificial intelligence", "deep learning", "nlp",
        "blockchain", "crypto", "web3", "nft", "smart contract", "serverless", "microservices",
        "monolith", "api", "rest api", "graphql", "grpc", "websocket", "sso", "oauth", "jwt"
    ];

    // 3. User Intents & Actions (Verbs & Nouns)
    const actions = [
        "hosting", "host", "deploy", "deployment", "build", "building", "ship", "shipping",
        "collaborate", "collaboration", "share", "sharing", "store", "storage", "backup",
        "create", "creation", "fork", "forking", "clone", "cloning", "pull", "push", "commit",
        "merge", "merging", "review", "code review", "track", "tracking", "fix", "bug fix",
        "release", "publish", "package", "packaging", "monitor", "monitoring", "secure", "security",
        "login", "sign up", "register", "signin", "signup", "download", "install", "update"
    ];

    const features = [
        "repository", "repositories", "repo", "repos", "gist", "gists", "wiki", "wikis",
        "issues", "bug tracker", "pull request", "pr", "discussions", "projects", "boards",
        "actions", "workflows", "packages", "registry", "pages", "website", "blog",
        "copilot", "codespaces", "security advisory", "secrets", "api token", "ssh key"
    ];

    // 4. Adjectives & Qualifiers
    const adjectives = [
        "free", "open source", "oss", "foss", "private", "public", "secure", "fast", "best",
        "top", "popular", "trending", "new", "latest", "enterprise", "business", "team",
        "personal", "student", "education", "unlimited", "cloud", "local", "remote",
        "distributed", "decentralized", "encrypted", "safe", "reliable", "easy", "simple"
    ];

    // 5. Regional / Language Specific (Uzbek & Russian mostly)
    const localTerms = [
        "gitxab", "githab", "kod", "dastur", "dasturlash", "sayt", "yaratish", "xosting",
        "bepul", "yuklash", "guruh", "loyihalar", "ombor", "git o'rganish", "dasturchi",
        "kod yozish", "ishlash", "githubga kirish", "akkaunt ochish", "registratsiya",
        "skachat", "programmirovanie", "razrabotka", "besplatno", "repozitoriy", "kod",
        "sayt", "sozdanie", "koding", "it", "technologies"
    ];

    // COMBINATORICS ENGINE
    // Warning: This generates a LOT of strings.
    const allKeywords = new Set<string>();

    // Helper to add safely
    const add = (str: string) => allKeywords.add(str.toLowerCase());

    // Level 0: All individual terms
    [...core, ...languages, ...frameworks, ...tools, ...concepts, ...actions, ...features, ...adjectives, ...localTerms].forEach(add);

    // Level 1: Core combinations (The meaty part)
    core.forEach(c => {
        // Core + Feature (e.g., "github repo")
        features.forEach(f => add(`${c} ${f}`));

        // Core + Action (e.g., "github hosting")
        actions.forEach(a => add(`${c} ${a}`));

        // Adj + Core (e.g., "free github")
        adjectives.forEach(adj => add(`${adj} ${c}`));

        // Local + Core (e.g., "bepul github")
        localTerms.forEach(l => add(`${l} ${c}`));
    });

    // Level 2: Technology combinations (High value SEO targets)
    // We combine Core + Tech + Action/Feature to target specific developer queries
    const allTech = [...languages, ...frameworks, ...tools];

    allTech.forEach(t => {
        core.forEach(c => {
            // Tech + Core (e.g., "react github")
            add(`${t} ${c}`);
            add(`${c} ${t}`); // "github react"

            // Core + Action + Tech (e.g., "github deploy react")
            add(`${c} deploy ${t}`);
            add(`${c} host ${t}`);
            add(`${c} repo ${t}`);
        });
    });

    // Level 3: "How to" and Questions (Long tail)
    const questions = ["how to", "what is", "best", "alternatives to", "free"];

    core.forEach(c => {
        questions.forEach(q => {
            add(`${q} ${c}`);
            add(`${c} ${q}`);
        });
    });

    // Level 4: Competitor/Alternative phrasing (e.g., "github vs gitlab")
    const competitors = ["gitlab", "bitbucket", "azure devops"];
    core.forEach(c => {
        competitors.forEach(comp => {
            add(`${c} vs ${comp}`);
            add(`${comp} vs ${c}`);
            add(`${c} alternative`);
        });
    });

    // Level 5: File Extensions + Core (Specific)
    const extensions = [".js", ".py", ".html", ".css", ".java", ".cpp", ".rs", ".go", ".ts"];
    core.forEach(c => {
        extensions.forEach(ext => add(`${c} ${ext} file`));
    });

    return Array.from(allKeywords);
};

export const seoKeywords = generateKeywords();
