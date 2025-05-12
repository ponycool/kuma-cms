PRAGMA foreign_keys = 0;

CREATE TABLE sqlitestudio_temp_table AS SELECT *
                                        FROM m_leads;

DROP TABLE m_leads;

CREATE TABLE m_leads (
                         id                  INTEGER NOT NULL
                             UNIQUE,
                         uuid                TEXT    NOT NULL
                             UNIQUE,
                         company             TEXT,
                         name                TEXT,
                         email               TEXT,
                         phone               TEXT,
                         additional_contacts TEXT,
                         assigned_to         TEXT,
                         assigned_at         TEXT,
                         registration_source TEXT,
                         registration_entry  TEXT,
                         traffic_source      TEXT,
    [group]             TEXT,
                         tags                TEXT,
                         remark              TEXT,
                         status              TEXT,
                         created_at          TEXT    NOT NULL,
                         updated_at          TEXT,
                         deleted_at          TEXT,
                         deleted             INTEGER NOT NULL
                             DEFAULT 0,
                         PRIMARY KEY (
                                      id AUTOINCREMENT
                             )
);

INSERT INTO m_leads (
    id,
    uuid,
    company,
    name,
    email,
    phone,
    additional_contacts,
    assigned_to,
    assigned_at,
    registration_source,
    registration_entry,
    [group],
    tags,
    remark,
    status,
    created_at,
    updated_at,
    deleted_at,
    deleted
)
SELECT id,
       uuid,
       company,
       name,
       email,
       phone,
       additional_contacts,
       assigned_to,
       assigned_at,
       source,
       registration_entry,
       "group",
       tags,
       remark,
       status,
       created_at,
       updated_at,
       deleted_at,
       deleted
FROM sqlitestudio_temp_table;

DROP TABLE sqlitestudio_temp_table;

PRAGMA foreign_keys = 1;


PRAGMA foreign_keys = 0;

CREATE TABLE sqlitestudio_temp_table AS SELECT *
                                        FROM m_message;

DROP TABLE m_message;

CREATE TABLE m_message (
                           id                  INTEGER NOT NULL
                               UNIQUE,
                           uuid                TEXT    NOT NULL
                               UNIQUE,
                           name                TEXT,
                           email               TEXT,
                           phone               TEXT,
                           company             TEXT,
                           subject             TEXT    NOT NULL,
                           content             TEXT,
                           registration_source TEXT,
                           traffic_source      TEXT,
                           status              TEXT,
                           created_at          TEXT    NOT NULL,
                           updated_at          TEXT,
                           deleted_at          TEXT,
                           deleted             INTEGER NOT NULL
                               DEFAULT 0,
                           PRIMARY KEY (
                                        id AUTOINCREMENT
                               )
);

INSERT INTO m_message (
    id,
    uuid,
    name,
    email,
    phone,
    company,
    subject,
    content,
    registration_source,
    status,
    created_at,
    updated_at,
    deleted_at,
    deleted
)
SELECT id,
       uuid,
       name,
       email,
       phone,
       company,
       subject,
       content,
       source,
       status,
       created_at,
       updated_at,
       deleted_at,
       deleted
FROM sqlitestudio_temp_table;

DROP TABLE sqlitestudio_temp_table;

PRAGMA foreign_keys = 1;


CREATE TABLE m_marketing_channel
(
    id           INTEGER PRIMARY KEY AUTOINCREMENT
        UNIQUE
                         NOT NULL,
    uuid         TEXT UNIQUE
                         NOT NULL,
    channel_name TEXT    NOT NULL,
    channel_type TEXT    NOT NULL,
    description  TEXT,
    source_code  TEXT    NOT NULL,
    created_at   TEXT    NOT NULL,
    updated_at   TEXT,
    deleted_at   TEXT,
    [ deleted]   INTEGER NOT NULL
        AS (0)
);