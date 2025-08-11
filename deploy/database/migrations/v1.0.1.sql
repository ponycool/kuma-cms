CREATE TABLE m_menu
(
    id             INTEGER PRIMARY KEY
        UNIQUE
                           NOT NULL,
    uuid           TEXT(36) UNIQUE
                           NOT NULL,
    pid            INTEGER NOT NULL,
    name           TEXT    NOT NULL,
    code           TEXT UNIQUE,
    icon           INTEGER,
    type           TEXT    NOT NULL,
    level          INTEGER NOT NULL
                           DEFAULT (1),
    link_url       TEXT,
    link_type      INTEGER DEFAULT (0),
    single_page_id INTEGER,
    visible        INTEGER NOT NULL
                           DEFAULT (1),
    enabled        INTEGER DEFAULT (0)
        NOT NULL,
    sort_index     INTEGER NOT NULL
                           DEFAULT (0),
    created_at     TEXT    NOT NULL,
    updated_at     TEXT,
    deleted_at     TEXT,
    deleted        INTEGER NOT NULL
                           DEFAULT (0)
);
