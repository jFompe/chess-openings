"use strict";

/* =========================================================
   2. OPENING TREE
   n(label, children)  -> position node
   m(san, uci, node)   -> move leading to that node
   ========================================================= */

const n = (label, children) => ({ label, children: children || [] });
const m = (san, uci, next)  => ({ san, uci, next });

const ROOT = n("Starting Position", [

  /* =========================== 1. e4 =========================== */
  m("e4", "e2e4", n("King's Pawn Opening", [

    /* -------- 1...e5 -------- */
    m("e5", "e7e5", n("Open Game", [
      m("Nf3", "g1f3", n("King's Knight Opening", [
        m("Nc6", "b8c6", n("Open Game", [

          /* ============ Ruy Lopez ============ */
          m("Bb5", "f1b5", n("Ruy Lopez", [
            m("a6", "a7a6", n("Morphy Defense", [
              m("Ba4", "b5a4", n("Ruy Lopez: Main Line", [
                m("Nf6", "g8f6", n("Ruy Lopez: Closed", [
                  m("O-O", "e1g1", n("Ruy Lopez: Closed", [
                    m("Be7", "f8e7", n("Ruy Lopez: Closed", [
                      m("Re1", "f1e1", n("Ruy Lopez: Closed", [
                        m("b5", "b7b5", n("Ruy Lopez: Closed", [
                          m("Bb3", "a4b3", n("Ruy Lopez: Closed", [
                            m("d6", "d7d6", n("Ruy Lopez: Closed", [
                              m("c3", "c2c3", n("Ruy Lopez: Closed", [
                                m("O-O", "e8g8", n("Ruy Lopez: Closed", [
                                  m("h3", "h2h3", n("Ruy Lopez: Closed Main Line", [
                                    m("Na5", "c6a5", n("Ruy Lopez: Chigorin", [
                                      m("Bc2", "b3c2", n("Ruy Lopez: Chigorin", [
                                        m("c5", "c7c5", n("Ruy Lopez: Chigorin Main Line"))
                                      ]))
                                    ])),
                                    m("Nb8", "c6b8", n("Ruy Lopez: Breyer", [
                                      m("d4", "d2d4", n("Ruy Lopez: Breyer", [
                                        m("Nb8", "c6b8", n("Ruy Lopez: Breyer"))
                                      ]))
                                    ])),
                                    m("Bb7", "c8b7", n("Ruy Lopez: Zaitsev", [
                                      m("d4", "d2d4", n("Ruy Lopez: Zaitsev", [
                                        m("Re8", "f8e8", n("Ruy Lopez: Zaitsev"))
                                      ]))
                                    ])),
                                    m("Qd7", "d8d7", n("Ruy Lopez: Flohr", [
                                      m("d4", "d2d4", n("Ruy Lopez: Flohr", [
                                        m("Re8", "f8e8", n("Ruy Lopez: Flohr"))
                                      ]))
                                    ]))
                                  ]))
                                ]))
                              ])),
                              m("O-O", "e8g8", n("Ruy Lopez: Keres", [
                                m("c3", "c2c3", n("Ruy Lopez: Keres"))
                              ]))
                            ]))
                          ]))
                        ])),
                        m("Bc5", "f8c5", n("Ruy Lopez: Classical", [
                          m("c3", "c2c3", n("Ruy Lopez: Classical", [
                            m("Nf6", "g8f6", n("Ruy Lopez: Classical", [
                              m("d4", "d2d4", n("Ruy Lopez: Classical", [
                                m("exd4", "e5d4", n("Ruy Lopez: Classical", [
                                  m("cxd4", "c3d4", n("Ruy Lopez: Classical", [
                                    m("Bb4", "c5b4", n("Ruy Lopez: Classical", [
                                      m("Nc3", "b1c3", n("Ruy Lopez: Classical", [
                                        m("Nxe4", "f6e4", n("Ruy Lopez: Classical", [
                                          m("O-O", "e1g1", n("Ruy Lopez: Classical Main Line", [
                                            m("Bxc3", "b4c3", n("Ruy Lopez: Classical Main Line", [
                                              m("d5", "d4d5", n("Ruy Lopez: Classical Main Line"))
                                            ]))
                                          ]))
                                        ]))
                                      ]))
                                    ]))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ])),
                        m("Nf6", "g8f6", n("Berlin Defense", [
                          m("O-O", "e1g1", n("Berlin Defense", [
                            m("Nxe4", "f6e4", n("Berlin Defense", [
                              m("d4", "d2d4", n("Berlin Defense", [
                                m("Nd6", "e4d6", n("Berlin Defense", [
                                  m("Bxc6", "b5c6", n("Berlin Defense", [
                                    m("dxc6", "d7c6", n("Berlin Defense", [
                                      m("dxe5", "d4e5", n("Berlin Defense", [
                                        m("Nf5", "d6f5", n("Berlin Defense", [
                                          m("Qxd8", "d1d8", n("Berlin: Endgame Line", [
                                            m("Kxd8", "e8d8", n("Berlin: Main Line"))
                                          ]))
                                        ]))
                                      ]))
                                    ]))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ])),
                        m("Bc5", "f8c5", n("Classical Defense", [
                          m("c3", "c2c3", n("Ruy Lopez: Classical", [
                            m("Nf6", "g8f6", n("Ruy Lopez: Classical"))
                          ]))
                        ])),
                        m("Nd4", "c6d4", n("Bird Defense"))
                      ])),
                    ]))
                  ]))
                ])),
                m("Bc5", "f8c5", n("Ruy Lopez: Classical", [
                  m("c3", "c2c3", n("Ruy Lopez: Classical", [
                    m("Nf6", "g8f6", n("Ruy Lopez: Classical", [
                      m("d4", "d2d4", n("Ruy Lopez: Classical", [
                        m("exd4", "e5d4", n("Ruy Lopez: Classical", [
                          m("cxd4", "c3d4", n("Ruy Lopez: Classical", [
                            m("Bb4", "c5b4", n("Ruy Lopez: Classical", [
                              m("Nc3", "b1c3", n("Ruy Lopez: Classical", [
                                m("Nxe4", "f6e4", n("Ruy Lopez: Classical", [
                                  m("O-O", "e1g1", n("Ruy Lopez: Classical Main Line", [
                                    m("Bxc3", "b4c3", n("Ruy Lopez: Classical Main Line", [
                                      m("d5", "d4d5", n("Ruy Lopez: Classical Main Line"))
                                    ]))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ])),
              m("Bxc6", "b5c6", n("Exchange Variation", [
                m("dxc6", "d7c6", n("Ruy Lopez: Exchange", [
                  m("d4", "d2d4", n("Ruy Lopez: Exchange", [
                    m("exd4", "e5d4", n("Ruy Lopez: Exchange", [
                      m("Qxd4", "d1d4", n("Ruy Lopez: Exchange", [
                        m("Qxd4", "d8d4", n("Ruy Lopez: Exchange", [
                          m("Nxd4", "f3d4", n("Ruy Lopez: Exchange Main Line"))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ])),
            m("Nf6", "g8f6", n("Berlin Defense", [
              m("O-O", "e1g1", n("Berlin Defense", [
                m("Nxe4", "f6e4", n("Berlin Defense", [
                  m("d4", "d2d4", n("Berlin Defense", [
                    m("Nd6", "e4d6", n("Berlin Defense", [
                      m("Bxc6", "b5c6", n("Berlin Defense", [
                        m("dxc6", "d7c6", n("Berlin Defense", [
                          m("dxe5", "d4e5", n("Berlin Defense", [
                            m("Nf5", "d6f5", n("Berlin Defense", [
                              m("Qxd8", "d1d8", n("Berlin: Endgame Line", [
                                m("Kxd8", "e8d8", n("Berlin: Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ])),
            m("Bc5", "f8c5", n("Classical Defense", [
              m("c3", "c2c3", n("Ruy Lopez: Classical", [
                m("Nf6", "g8f6", n("Ruy Lopez: Classical"))
              ]))
            ])),
            m("Nd4", "c6d4", n("Bird Defense"))
          ])),

          /* ============ Italian Game ============ */
          m("Bc4", "f1c4", n("Italian Game", [
            m("Bc5", "f8c5", n("Giuoco Piano", [
              m("c3", "c2c3", n("Giuoco Piano", [
                m("Nf6", "g8f6", n("Giuoco Piano", [
                  m("d3", "d2d3", n("Giuoco Pianissimo", [
                    m("d6", "d7d6", n("Giuoco Pianissimo", [
                      m("O-O", "e1g1", n("Giuoco Pianissimo", [
                        m("O-O", "e8g8", n("Giuoco Pianissimo", [
                          m("Re1", "f1e1", n("Giuoco Pianissimo", [
                            m("a6", "a7a6", n("Giuoco Pianissimo", [
                              m("Bb3", "c4b3", n("Giuoco Pianissimo", [
                                m("Ba7", "c5a7", n("Giuoco Pianissimo", [
                                  m("Nbd2", "b1d2", n("Giuoco Pianissimo Main Line"))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ])),
                  m("d4", "d2d4", n("Giuoco Piano", [
                    m("exd4", "e5d4", n("Giuoco Piano", [
                      m("cxd4", "c3d4", n("Giuoco Piano", [
                        m("Bb4", "c5b4", n("Giuoco Piano", [
                          m("Nc3", "b1c3", n("Giuoco Piano"))
                        ]))
                      ]))
                    ]))
                  ]))
                ])),
                  m("O-O", "e1g1", n("Giuoco Piano", [
                    m("d6", "d7d6", n("Giuoco Piano", [
                      m("d4", "d2d4", n("Giuoco Piano"))
                    ]))
                  ]))
              ])),
              m("b4", "b2b4", n("Evans Gambit", [
                m("Bxb4", "c5b4", n("Evans Gambit", [
                  m("c3", "c2c3", n("Evans Gambit", [
                    m("Ba5", "b4a5", n("Evans Gambit", [
                      m("d4", "d2d4", n("Evans Gambit Accepted")),
                      m("Bc5", "f8c5", n("Evans Gambit Declined"))
                    ]))
                  ]))
                ]))
              ]))
            ])),
            m("Nf6", "g8f6", n("Two Knights Defense", [
              m("Ng5", "f3g5", n("Two Knights: Main Line", [
                m("d5", "d7d5", n("Two Knights: Main Line", [
                  m("exd5", "e4d5", n("Two Knights: Main Line", [
                    m("Na5", "c6a5", n("Two Knights: Main Line", [
                      m("Bb5", "c4b5", n("Two Knights: Main Line", [
                        m("c6", "c7c6", n("Two Knights: Main Line", [
                          m("dxc6", "d5c6", n("Two Knights: Main Line", [
                            m("bxc6", "b7c6", n("Two Knights: Main Line", [
                              m("Be2", "b5e2", n("Two Knights: Main Line", [
                                m("h6", "h7h6", n("Two Knights: Main Line", [
                                  m("Nf3", "g5f3", n("Two Knights: Main Line", [
                                    m("e4", "e5e4", n("Two Knights: Main Line", [
                                      m("Ne5", "f3e5", n("Two Knights: Main Line", [
                                        m("Bd6", "f8d6", n("Two Knights Main Line"))
                                      ]))
                                    ]))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ])),
              m("d4", "d2d4", n("Italian: Center Attack", [
                m("exd4", "e5d4", n("Italian: Center Attack", [
                  m("O-O", "e1g1", n("Italian: Center Attack", [
                    m("Nxe4", "f6e4", n("Italian: Center Attack"))
                  ]))
                ]))
              ]))
            ]))
          ])),

          /* ============ Scotch ============ */
          m("d4", "d2d4", n("Scotch Game", [
            m("exd4", "e5d4", n("Scotch Game", [
              m("Nxd4", "f3d4", n("Scotch Game", [
                m("Nf6", "g8f6", n("Scotch Game", [
                  m("Nxc6", "d4c6", n("Scotch Game", [
                    m("bxc6", "b7c6", n("Scotch Game", [
                      m("e5", "e4e5", n("Scotch Game", [
                        m("Qe7", "d8e7", n("Scotch Game", [
                          m("Qe2", "d1e2", n("Scotch Game", [
                            m("Nd5", "f6d5", n("Scotch Game", [
                              m("c4", "c2c4", n("Scotch Game", [
                                m("Ba6", "c8a6", n("Scotch Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ])),
                  m("Ndb5", "d4b5", n("Scotch: Mieses", [
                    m("d6", "d7d6", n("Scotch: Mieses", [
                      m("Bf4", "c1f4", n("Scotch: Mieses"))
                    ]))
                  ]))
                ])),
                m("Bc5", "f8c5", n("Scotch: Classical", [
                  m("Nxc6", "d4c6", n("Scotch: Classical", [
                    m("Qf6", "d8f6", n("Scotch: Classical", [
                      m("Qd2", "d1d2", n("Scotch: Classical", [
                        m("dxc6", "b7c6", n("Scotch: Classical"))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ])),

          /* ============ Four Knights ============ */
          m("Nc3", "b1c3", n("Four Knights Game", [
            m("Nf6", "g8f6", n("Four Knights Game", [
              m("Bb5", "f1b5", n("Four Knights Game", [
                m("Bb4", "f8b4", n("Four Knights Game", [
                  m("O-O", "e1g1", n("Four Knights Game", [
                    m("O-O", "e8g8", n("Four Knights Game", [
                      m("d3", "d2d3", n("Four Knights Game", [
                        m("d6", "d7d6", n("Four Knights Game", [
                          m("Bg5", "c1g5", n("Four Knights Game", [
                            m("Bxc3", "b4c3", n("Four Knights Game", [
                              m("bxc3", "b2c3", n("Four Knights Game", [
                                m("Qe7", "d8e7", n("Four Knights Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ])),
              m("d4", "d2d4", n("Four Knights: Scotch", [
                m("exd4", "e5d4", n("Four Knights: Scotch", [
                  m("Nxd4", "f3d4", n("Four Knights: Scotch", [
                    m("Bb4", "f8b4", n("Four Knights: Scotch"))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ])),

        /* ============ Petrov ============ */
        m("Nf6", "g8f6", n("Petrov Defense", [
          m("Nxe5", "f3e5", n("Petrov Defense", [
            m("d6", "d7d6", n("Petrov Defense", [
              m("Nf3", "e5f3", n("Petrov Defense", [
                m("Nxe4", "f6e4", n("Petrov Defense", [
                  m("d4", "d2d4", n("Petrov Defense", [
                    m("d5", "d6d5", n("Petrov Defense", [
                      m("Bd3", "f1d3", n("Petrov Defense", [
                        m("Be7", "f8e7", n("Petrov Defense", [
                          m("O-O", "e1g1", n("Petrov Defense", [
                            m("Nc6", "b8c6", n("Petrov Defense", [
                              m("c4", "c2c4", n("Petrov Main Line", [
                                m("Nb4", "c6b4", n("Petrov Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ])),

        /* ============ Philidor ============ */
        m("d6", "d7d6", n("Philidor Defense", [
          m("d4", "d2d4", n("Philidor Defense", [
            m("exd4", "e5d4", n("Philidor Defense", [
              m("Nxd4", "f3d4", n("Philidor Defense", [
                m("Nf6", "g8f6", n("Philidor Defense", [
                  m("Nc3", "b1c3", n("Philidor Defense", [
                    m("Be7", "f8e7", n("Philidor Defense", [
                      m("Be2", "f1e2", n("Philidor Defense", [
                        m("O-O", "e8g8", n("Philidor Defense", [
                          m("O-O", "e1g1", n("Philidor Defense", [
                            m("Re8", "f8e8", n("Philidor Defense", [
                              m("f4", "f2f4", n("Philidor Main Line", [
                                m("Bf8", "e7f8", n("Philidor Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ])),

      /* ============ Vienna ============ */
      m("Nc3", "b1c3", n("Vienna Game", [
        m("Nf6", "g8f6", n("Vienna Game", [
          m("f4", "f2f4", n("Vienna Gambit", [
            m("d5", "d7d5", n("Vienna Gambit", [
              m("fxe5", "f4e5", n("Vienna Gambit", [
                m("Nxe4", "f6e4", n("Vienna Gambit", [
                  m("Nf3", "g1f3", n("Vienna Gambit", [
                    m("Be7", "f8e7", n("Vienna Gambit", [
                      m("d4", "d2d4", n("Vienna Gambit", [
                        m("O-O", "e8g8", n("Vienna Gambit", [
                          m("Bd3", "f1d3", n("Vienna Gambit", [
                            m("f5", "f7f5", n("Vienna Gambit Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ])),
          m("Bc4", "f1c4", n("Vienna Game", [
            m("Nxe4", "f6e4", n("Vienna Game", [
              m("Qh5", "d1h5", n("Vienna Game", [
                m("Nd6", "e4d6", n("Vienna Game", [
                  m("Bb3", "c4b3", n("Vienna Game", [
                    m("Nc6", "b8c6", n("Vienna Game", [
                      m("Nb5", "c3b5", n("Vienna Game", [
                        m("g6", "g7g6", n("Vienna Game", [
                          m("Qf3", "h5f3", n("Vienna Game", [
                            m("f5", "f7f5", n("Vienna Game"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ])),

      /* ============ King's Gambit ============ */
      m("f4", "f2f4", n("King's Gambit", [
        m("exf4", "e5f4", n("King's Gambit Accepted", [
          m("Nf3", "g1f3", n("King's Gambit Accepted", [
            m("d5", "d7d5", n("King's Gambit Accepted", [
              m("exd5", "e4d5", n("King's Gambit Accepted", [
                m("Nf6", "g8f6", n("King's Gambit Accepted", [
                  m("Bc4", "f1c4", n("King's Gambit Accepted", [
                    m("Nxd5", "f6d5", n("King's Gambit Accepted", [
                      m("O-O", "e1g1", n("King's Gambit Accepted", [
                        m("Be6", "c8e6", n("King's Gambit Accepted", [
                          m("Bb3", "c4b3", n("King's Gambit Accepted", [
                            m("Be7", "f8e7", n("King's Gambit Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ])),
            m("g5", "g7g5", n("Kieseritzky Gambit", [
              m("h4", "h2h4", n("Kieseritzky Gambit", [
                m("g4", "g5g4", n("Kieseritzky Gambit", [
                  m("Ne5", "f3e5", n("Kieseritzky Gambit", [
                    m("Nf6", "g8f6", n("Kieseritzky Gambit"))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ])),
        m("Bc5", "f8c5", n("King's Gambit Declined", [
          m("Nf6", "g8f6", n("King's Gambit Declined", [
            m("Nf3", "g1f3", n("King's Gambit Declined"))
          ]))
        ]))
      ])),

      /* ============ Bishop's Opening ============ */
      m("Bc4", "f1c4", n("Bishop's Opening", [
        m("Nf6", "g8f6", n("Bishop's Opening", [
          m("d3", "d2d3", n("Bishop's Opening", [
            m("c6", "c7c6", n("Bishop's Opening", [
              m("Nf3", "g1f3", n("Bishop's Opening", [
                m("d5", "d7d5", n("Bishop's Opening", [
                  m("Bb3", "c4b3", n("Bishop's Opening", [
                    m("Bd6", "f8d6", n("Bishop's Opening", [
                      m("O-O", "e1g1", n("Bishop's Opening", [
                        m("O-O", "e8g8", n("Bishop's Opening", [
                          m("Bg5", "c1g5", n("Bishop's Opening", [
                            m("Be6", "c8e6", n("Bishop's Opening Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ])),
        m("Nc6", "b8c6", n("Bishop's Opening: Berlin", [
          m("Nf3", "g1f3", n("Bishop's Opening: Berlin", [
            m("Nf6", "g8f6", n("Bishop's Opening: Berlin"))
          ]))
        ]))
      ])),

      /* ============ Center Game ============ */
      m("d4", "d2d4", n("Center Game", [
        m("exd4", "e5d4", n("Center Game", [
          m("Qxd4", "d1d4", n("Center Game", [
            m("Nc6", "b8c6", n("Center Game", [
              m("Qe3", "d4e3", n("Center Game", [
                m("Nf6", "g8f6", n("Center Game"))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),

    /* -------- 1...c5 Sicilian -------- */
    m("c5", "c7c5", n("Sicilian Defense", [

      m("Nf3", "g1f3", n("Sicilian: Open", [
        m("d6", "d7d6", n("Sicilian: Open", [
          m("d4", "d2d4", n("Sicilian: Open", [
            m("cxd4", "c5d4", n("Sicilian: Open", [
              m("Nxd4", "f3d4", n("Sicilian: Open", [
                m("Nf6", "g8f6", n("Sicilian: Open", [
                  m("Nc3", "b1c3", n("Sicilian: Open", [

                    /* --- Najdorf --- */
                    m("a6", "a7a6", n("Najdorf Variation", [
                      m("Be3", "c1e3", n("Najdorf: English Attack", [
                        m("e5", "e7e5", n("Najdorf: English Attack", [
                          m("Nb3", "d4b3", n("Najdorf: English Attack", [
                            m("Be6", "c8e6", n("Najdorf: English Attack", [
                              m("f3", "f2f3", n("Najdorf: English Attack", [
                                m("Be7", "f8e7", n("Najdorf: English Attack", [
                                  m("Qd2", "d1d2", n("Najdorf: English Attack", [
                                    m("O-O", "e8g8", n("Najdorf: English Attack", [
                                      m("O-O-O", "e1c1", n("Najdorf: English Attack", [
                                        m("Nbd7", "b8d7", n("Najdorf: English Attack Main Line"))
                                      ]))
                                    ]))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ])),
                      m("Bg5", "c1g5", n("Najdorf: Opocensky", [
                        m("e6", "e7e6", n("Najdorf: Opocensky", [
                          m("f4", "f2f4", n("Najdorf: Opocensky"))
                        ]))
                      ]))
                    ])),
                      m("Bc4", "f1c4", n("Najdorf: Sozin", [
                        m("e6", "e7e6", n("Najdorf: Sozin", [
                          m("Bb3", "c4b3", n("Najdorf: Sozin", [
                            m("b5", "b7b5", n("Najdorf: Sozin Main Line"))
                          ]))
                        ]))
                      ])),
                      m("Bb3", "c4b3", n("Najdorf: Richter-Rauzer", [
                        m("Nc6", "b8c6", n("Najdorf: Richter-Rauzer", [
                          m("f3", "f2f3", n("Najdorf: Richter-Rauzer", [
                            m("Be7", "f8e7", n("Najdorf: Richter-Rauzer", [
                              m("Qd2", "d1d2", n("Najdorf: Richter-Rauzer", [
                                m("O-O", "e8g8", n("Najdorf: Richter-Rauzer Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ])),

                    /* --- Dragon --- */
                    m("g6", "g7g6", n("Dragon Variation", [
                      m("Be3", "c1e3", n("Dragon: Yugoslav Attack", [
                        m("Bg7", "f8g7", n("Dragon: Yugoslav Attack", [
                          m("f3", "f2f3", n("Dragon: Yugoslav Attack", [
                            m("O-O", "e8g8", n("Dragon: Yugoslav Attack", [
                              m("Qd2", "d1d2", n("Dragon: Yugoslav Attack", [
                                m("Nc6", "b8c6", n("Dragon: Yugoslav Attack", [
                                  m("O-O-O", "e1c1", n("Dragon: Yugoslav Attack", [
                                    m("d5", "d7d5", n("Dragon: Yugoslav Attack", [
                                      m("exd5", "e4d5", n("Dragon: Yugoslav Attack", [
                                        m("Nxd5", "c6d5", n("Dragon: Yugoslav Main Line"))
                                      ]))
                                    ]))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ])),

                    /* --- Scheveningen / Keres --- */
                    m("e6", "e7e6", n("Scheveningen Variation", [
                      m("g4", "g2g4", n("Keres Attack", [
                        m("h6", "h7h6", n("Keres Attack", [
                          m("h4", "h2h4", n("Keres Attack", [
                            m("Nc6", "b8c6", n("Keres Attack", [
                              m("Rg1", "h1g1", n("Keres Attack", [
                                m("d5", "d7d5", n("Keres Attack", [
                                  m("exd5", "e4d5", n("Keres Attack", [
                                    m("exd5", "e6d5", n("Keres Attack"))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ])),
                      m("Be2", "f1e2", n("Scheveningen: Classical", [
                        m("Be7", "f8e7", n("Scheveningen: Classical", [
                          m("O-O", "e1g1", n("Scheveningen: Classical", [
                            m("O-O", "e8g8", n("Scheveningen: Classical", [
                              m("f4", "f2f4", n("Scheveningen: Classical"))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ])),

        /* --- Sveshnikov --- */
        m("Nc6", "b8c6", n("Old Sicilian", [
          m("d4", "d2d4", n("Sicilian: Open", [
            m("cxd4", "c5d4", n("Sicilian: Open", [
              m("Nxd4", "f3d4", n("Sicilian: Open", [
                m("Nf6", "g8f6", n("Sicilian: Open", [
                  m("Nc3", "b1c3", n("Sveshnikov Variation", [
                    m("e5", "e7e5", n("Sveshnikov Variation", [
                      m("Ndb5", "d4b5", n("Sveshnikov Variation", [
                        m("d6", "d7d6", n("Sveshnikov Variation", [
                          m("Bg5", "c1g5", n("Sveshnikov Variation", [
                            m("a6", "a7a6", n("Sveshnikov Variation", [
                              m("Na3", "b5a3", n("Sveshnikov Variation", [
                                m("b5", "b7b5", n("Sveshnikov Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ])),

        /* --- Kan --- */
        m("e6", "e7e6", n("Sicilian: Kan", [
          m("d4", "d2d4", n("Sicilian: Kan", [
            m("cxd4", "c5d4", n("Sicilian: Kan", [
              m("Nxd4", "f3d4", n("Sicilian: Kan", [
                m("a6", "a7a6", n("Sicilian: Kan", [
                  m("Bd3", "f1d3", n("Sicilian: Kan", [
                    m("Nf6", "g8f6", n("Sicilian: Kan", [
                      m("O-O", "e1g1", n("Sicilian: Kan", [
                        m("d6", "d7d6", n("Sicilian: Kan Main Line"))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ])),

      /* --- Closed Sicilian --- */
      m("Nc3", "b1c3", n("Closed Sicilian", [
        m("Nc6", "b8c6", n("Closed Sicilian", [
          m("g3", "g2g3", n("Closed Sicilian", [
            m("g6", "g7g6", n("Closed Sicilian", [
              m("Bg2", "f1g2", n("Closed Sicilian", [
                m("Bg7", "f8g7", n("Closed Sicilian", [
                  m("d3", "d2d3", n("Closed Sicilian", [
                    m("d6", "d7d6", n("Closed Sicilian", [
                      m("f4", "f2f4", n("Closed Sicilian", [
                        m("e6", "e7e6", n("Closed Sicilian", [
                          m("Nf3", "g1f3", n("Closed Sicilian", [
                            m("Nge7", "g8e7", n("Closed Sicilian", [
                              m("O-O", "e1g1", n("Closed Sicilian", [
                                m("O-O", "e8g8", n("Closed Sicilian Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ])),

      /* --- Alapin --- */
      m("c3", "c2c3", n("Alapin Variation", [
        m("d5", "d7d5", n("Alapin Variation", [
          m("exd5", "e4d5", n("Alapin Variation", [
            m("Qxd5", "d8d5", n("Alapin Variation", [
              m("d4", "d2d4", n("Alapin Variation", [
                m("Nf6", "g8f6", n("Alapin Variation", [
                  m("Nf3", "g1f3", n("Alapin Variation", [
                    m("Bg4", "c8g4", n("Alapin Variation", [
                      m("Be2", "f1e2", n("Alapin Variation", [
                        m("e6", "e7e6", n("Alapin Variation", [
                          m("h3", "h2h3", n("Alapin Variation", [
                            m("Bh5", "g4h5", n("Alapin Variation", [
                              m("O-O", "e1g1", n("Alapin Variation", [
                                m("Nc6", "b8c6", n("Alapin Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ])),
        m("Nf6", "g8f6", n("Alapin Variation", [
          m("e5", "e4e5", n("Alapin: Advance", [
            m("Nd5", "f6d5", n("Alapin: Advance", [
              m("d4", "d2d4", n("Alapin: Advance"))
            ]))
          ]))
        ]))
      ])),

      /* --- Smith-Morra --- */
      m("d4", "d2d4", n("Smith-Morra Gambit", [
        m("cxd4", "c5d4", n("Smith-Morra Gambit", [
          m("c3", "c2c3", n("Smith-Morra Gambit", [
            m("dxc3", "d4c3", n("Smith-Morra Accepted", [
              m("Nxc3", "b1c3", n("Smith-Morra Accepted", [
                m("Nc6", "b8c6", n("Smith-Morra Accepted", [
                  m("Nf3", "g1f3", n("Smith-Morra Accepted", [
                    m("d6", "d7d6", n("Smith-Morra Accepted", [
                      m("Bc4", "f1c4", n("Smith-Morra Accepted", [
                        m("e6", "e7e6", n("Smith-Morra Accepted", [
                          m("O-O", "e1g1", n("Smith-Morra Accepted", [
                            m("Nf6", "g8f6", n("Smith-Morra Accepted", [
                              m("Qe2", "d1e2", n("Smith-Morra Accepted", [
                                m("Be7", "f8e7", n("Smith-Morra Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),

    /* -------- 1...e6 French -------- */
    m("e6", "e7e6", n("French Defense", [
      m("d4", "d2d4", n("French Defense", [
        m("d5", "d7d5", n("French Defense", [

          m("Nc3", "b1c3", n("French: Classical", [
            m("Nf6", "g8f6", n("French: Classical", [
              m("e5", "e4e5", n("Steinitz Variation", [
                m("Nfd7", "f6d7", n("Steinitz Variation", [
                  m("f4", "f2f4", n("Steinitz Variation", [
                    m("c5", "c7c5", n("Steinitz Variation", [
                      m("Nf3", "g1f3", n("Steinitz Variation", [
                        m("Nc6", "b8c6", n("Steinitz Variation", [
                          m("Be3", "c1e3", n("Steinitz Variation", [
                            m("cxd4", "c5d4", n("Steinitz Variation", [
                              m("Nxd4", "f3d4", n("Steinitz Variation", [
                                m("Bc5", "f8c5", n("Steinitz Variation", [
                                  m("Qd2", "d1d2", n("Steinitz Variation", [
                                    m("O-O", "e8g8", n("Steinitz Main Line"))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ])),
            m("Bb4", "f8b4", n("Winawer Variation", [
              m("e5", "e4e5", n("Winawer Variation", [
                m("c5", "c7c5", n("Winawer Variation", [
                  m("a3", "a2a3", n("Winawer Variation", [
                    m("Bxc3", "b4c3", n("Winawer Variation", [
                      m("bxc3", "b2c3", n("Winawer Variation", [
                        m("Ne7", "g8e7", n("Winawer Variation", [
                          m("Qg4", "d1g4", n("Winawer Variation", [
                            m("Qc7", "d8c7", n("Winawer Variation", [
                              m("Qxg7", "g4g7", n("Winawer Variation", [
                                m("Rg8", "h8g8", n("Winawer Variation", [
                                  m("Qxh7", "g7h7", n("Winawer Variation", [
                                    m("cxd4", "c5d4", n("Winawer Main Line"))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ])),

          m("Nd2", "b1d2", n("Tarrasch Variation", [
            m("c5", "c7c5", n("Tarrasch Variation", [
              m("exd5", "e4d5", n("Tarrasch Variation", [
                m("Qxd5", "d8d5", n("Tarrasch Variation", [
                  m("Ngf3", "g1f3", n("Tarrasch Variation", [
                    m("cxd4", "c5d4", n("Tarrasch Variation", [
                      m("Bc4", "f1c4", n("Tarrasch Variation", [
                        m("Qd6", "d5d6", n("Tarrasch Variation", [
                          m("O-O", "e1g1", n("Tarrasch Variation", [
                            m("Nf6", "g8f6", n("Tarrasch Variation", [
                              m("Nb3", "d2b3", n("Tarrasch Variation", [
                                m("Nc6", "b8c6", n("Tarrasch Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ])),
            m("Nf6", "g8f6", n("Tarrasch Variation", [
              m("e5", "e4e5", n("Tarrasch Variation"))
            ]))
          ])),

          m("e5", "e4e5", n("Advance Variation", [
            m("c5", "c7c5", n("Advance Variation", [
              m("c3", "c2c3", n("Advance Variation", [
                m("Nc6", "b8c6", n("Advance Variation", [
                  m("Nf3", "g1f3", n("Advance Variation", [
                    m("Qb6", "d8b6", n("Advance Variation", [
                      m("a3", "a2a3", n("Advance Variation", [
                        m("Nh6", "g8h6", n("Advance Variation", [
                          m("b4", "b2b4", n("Advance Variation", [
                            m("cxd4", "c5d4", n("Advance Variation", [
                              m("cxd4", "c3d4", n("Advance Variation", [
                                m("Nf5", "h6f5", n("Advance Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ])),

          m("exd5", "e4d5", n("Exchange Variation", [
            m("exd5", "e6d5", n("Exchange Variation", [
              m("Nf3", "g1f3", n("Exchange Variation", [
                m("Nf6", "g8f6", n("Exchange Variation", [
                  m("Bd3", "f1d3", n("Exchange Variation", [
                    m("Bd6", "f8d6", n("Exchange Variation", [
                      m("O-O", "e1g1", n("Exchange Variation", [
                        m("O-O", "e8g8", n("Exchange Variation", [
                          m("Bg5", "c1g5", n("Exchange Variation", [
                            m("Bg4", "c8g4", n("Exchange Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),

    /* -------- 1...c6 Caro-Kann -------- */
    m("c6", "c7c6", n("Caro-Kann Defense", [
      m("d4", "d2d4", n("Caro-Kann", [
        m("d5", "d7d5", n("Caro-Kann", [

          m("Nc3", "b1c3", n("Caro-Kann: Classical", [
            m("dxe4", "d5e4", n("Caro-Kann: Classical", [
              m("Nxe4", "c3e4", n("Caro-Kann: Classical", [
                m("Bf5", "c8f5", n("Caro-Kann: Classical", [
                  m("Ng3", "e4g3", n("Caro-Kann: Classical", [
                    m("Bg6", "f5g6", n("Caro-Kann: Classical", [
                      m("h4", "h2h4", n("Caro-Kann: Classical", [
                        m("h6", "h7h6", n("Caro-Kann: Classical", [
                          m("Nf3", "g1f3", n("Caro-Kann: Classical", [
                            m("Nd7", "b8d7", n("Caro-Kann: Classical", [
                              m("h5", "h4h5", n("Caro-Kann: Classical", [
                                m("Bh7", "g6h7", n("Caro-Kann: Classical", [
                                  m("Bd3", "f1d3", n("Caro-Kann: Classical", [
                                    m("Bxd3", "h7d3", n("Caro-Kann: Classical", [
                                      m("Qxd3", "d1d3", n("Caro-Kann: Classical", [
                                        m("e6", "e7e6", n("Caro-Kann Classical Main Line"))
                                      ]))
                                    ]))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ])),

          m("e5", "e4e5", n("Caro-Kann: Advance", [
            m("Bf5", "c8f5", n("Caro-Kann: Advance", [
              m("Nf3", "g1f3", n("Caro-Kann: Advance", [
                m("e6", "e7e6", n("Caro-Kann: Advance", [
                  m("Be2", "f1e2", n("Caro-Kann: Advance", [
                    m("c5", "c7c5", n("Caro-Kann: Advance", [
                      m("Be3", "c1e3", n("Caro-Kann: Advance", [
                        m("Nc6", "b8c6", n("Caro-Kann: Advance", [
                          m("O-O", "e1g1", n("Caro-Kann: Advance", [
                            m("cxd4", "c5d4", n("Caro-Kann: Advance", [
                              m("Nxd4", "f3d4", n("Caro-Kann: Advance", [
                                m("Nxe5", "c6e5", n("Caro-Kann Advance Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ])),
            m("c5", "c7c5", n("Caro-Kann: Advance", [
              m("c3", "c2c3", n("Caro-Kann: Advance"))
            ]))
          ])),

          m("exd5", "e4d5", n("Caro-Kann: Exchange", [
            m("cxd5", "c6d5", n("Caro-Kann: Exchange", [
              m("c4", "c2c4", n("Panov Attack", [
                m("Nf6", "g8f6", n("Panov Attack", [
                  m("Nc3", "b1c3", n("Panov Attack", [
                    m("e6", "e7e6", n("Panov Attack", [
                      m("Nf3", "g1f3", n("Panov Attack", [
                        m("Be7", "f8e7", n("Panov Attack", [
                          m("cxd5", "c4d5", n("Panov Attack", [
                            m("Nxd5", "f6d5", n("Panov Attack", [
                              m("Bd3", "f1d3", n("Panov Attack", [
                                m("Nc6", "b8c6", n("Panov Attack Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ])),

          m("Nd2", "b1d2", n("Caro-Kann: Karpov", [
            m("dxe4", "d5e4", n("Caro-Kann: Karpov", [
              m("Nxe4", "d2e4", n("Caro-Kann: Karpov", [
                m("Nd7", "b8d7", n("Caro-Kann: Karpov", [
                  m("Ng5", "e4g5", n("Caro-Kann: Karpov", [
                    m("Ngf6", "g8f6", n("Caro-Kann: Karpov", [
                      m("Bd3", "f1d3", n("Caro-Kann: Karpov", [
                        m("e6", "e7e6", n("Caro-Kann: Karpov", [
                          m("N1f3", "g1f3", n("Caro-Kann: Karpov", [
                            m("Bd6", "f8d6", n("Caro-Kann Karpov Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),

    /* -------- 1...d5 Scandinavian -------- */
    m("d5", "d7d5", n("Scandinavian Defense", [
      m("exd5", "e4d5", n("Scandinavian Defense", [
        m("Qxd5", "d8d5", n("Scandinavian Defense", [
          m("Nc3", "b1c3", n("Scandinavian Defense", [
            m("Qa5", "d5a5", n("Scandinavian: Main Line", [
              m("d4", "d2d4", n("Scandinavian: Main Line", [
                m("Nf6", "g8f6", n("Scandinavian: Main Line", [
                  m("Nf3", "g1f3", n("Scandinavian: Main Line", [
                    m("c6", "c7c6", n("Scandinavian: Main Line", [
                      m("Bc4", "f1c4", n("Scandinavian: Main Line", [
                        m("Bf5", "c8f5", n("Scandinavian: Main Line", [
                          m("Bd2", "c1d2", n("Scandinavian: Main Line", [
                            m("e6", "e7e6", n("Scandinavian: Main Line", [
                              m("Qe2", "d1e2", n("Scandinavian: Main Line", [
                                m("Bb4", "f8b4", n("Scandinavian Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ])),
            m("Qd6", "d5d6", n("Scandinavian: Qd6", [
              m("Nf3", "g1f3", n("Scandinavian: Qd6", [
                m("Nf6", "g8f6", n("Scandinavian: Qd6"))
              ]))
            ]))
          ]))
        ])),
        m("Nf6", "g8f6", n("Scandinavian: Modern", [
          m("d4", "d2d4", n("Scandinavian: Modern", [
            m("Nxd5", "f6d5", n("Scandinavian: Modern", [
              m("Nf3", "g1f3", n("Scandinavian: Modern", [
                m("Bg4", "c8g4", n("Scandinavian: Modern", [
                  m("Be2", "f1e2", n("Scandinavian: Modern", [
                    m("e6", "e7e6", n("Scandinavian: Modern", [
                      m("O-O", "e1g1", n("Scandinavian: Modern", [
                        m("Be7", "f8e7", n("Scandinavian: Modern", [
                          m("c4", "c2c4", n("Scandinavian: Modern", [
                            m("Nb6", "d5b6", n("Scandinavian Modern Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),

    /* -------- 1...Nf6 Alekhine -------- */
    m("Nf6", "g8f6", n("Alekhine Defense", [
      m("e5", "e4e5", n("Alekhine Defense", [
        m("Nd5", "f6d5", n("Alekhine Defense", [
          m("d4", "d2d4", n("Alekhine Defense", [
            m("d6", "d7d6", n("Alekhine Defense", [
              m("Nf3", "g1f3", n("Alekhine Defense", [
                m("dxe5", "d6e5", n("Alekhine Defense", [
                  m("Nxe5", "f3e5", n("Alekhine Defense", [
                    m("c6", "c7c6", n("Alekhine Defense", [
                      m("Be2", "f1e2", n("Alekhine Defense", [
                        m("Bf5", "c8f5", n("Alekhine Defense", [
                          m("O-O", "e1g1", n("Alekhine Defense", [
                            m("Nd7", "b8d7", n("Alekhine Defense", [
                              m("Nf3", "e5f3", n("Alekhine Defense", [
                                m("N7b6", "d7b6", n("Alekhine Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ])),
          m("c4", "c2c4", n("Alekhine: Four Pawns", [
            m("Nb6", "d5b6", n("Alekhine: Four Pawns", [
              m("d4", "d2d4", n("Alekhine: Four Pawns", [
                m("d6", "d7d6", n("Alekhine: Four Pawns", [
                  m("f4", "f2f4", n("Alekhine: Four Pawns", [
                    m("dxe5", "d6e5", n("Alekhine: Four Pawns", [
                      m("fxe5", "f4e5", n("Alekhine: Four Pawns", [
                        m("Nc6", "b8c6", n("Alekhine: Four Pawns", [
                          m("Be3", "c1e3", n("Alekhine: Four Pawns", [
                            m("Bf5", "c8f5", n("Alekhine: Four Pawns", [
                              m("Nc3", "b1c3", n("Alekhine: Four Pawns", [
                                m("e6", "e7e6", n("Alekhine: Four Pawns Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),

    /* -------- 1...d6 Pirc -------- */
    m("d6", "d7d6", n("Pirc Defense", [
      m("d4", "d2d4", n("Pirc Defense", [
        m("Nf6", "g8f6", n("Pirc Defense", [
          m("Nc3", "b1c3", n("Pirc Defense", [
            m("g6", "g7g6", n("Pirc Defense", [
              m("Be3", "c1e3", n("Pirc: Austrian Attack", [
                m("Bg7", "f8g7", n("Pirc: Austrian Attack", [
                  m("Qd2", "d1d2", n("Pirc: Austrian Attack", [
                    m("O-O", "e8g8", n("Pirc: Austrian Attack", [
                      m("O-O-O", "e1c1", n("Pirc: Austrian Attack", [
                        m("Nc6", "b8c6", n("Pirc: Austrian Attack", [
                          m("f3", "f2f3", n("Pirc: Austrian Attack", [
                            m("e5", "e7e5", n("Pirc: Austrian Attack", [
                              m("d5", "d4d5", n("Pirc: Austrian Attack", [
                                m("Ne7", "c6e7", n("Pirc: Austrian Attack", [
                                  m("g4", "g2g4", n("Pirc: Austrian Attack", [
                                    m("c6", "c7c6", n("Pirc Austrian Main Line"))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ])),
              m("Be2", "f1e2", n("Pirc: Classical", [
                m("Bg7", "f8g7", n("Pirc: Classical", [
                  m("Nf3", "g1f3", n("Pirc: Classical", [
                    m("O-O", "e8g8", n("Pirc: Classical", [
                      m("O-O", "e1g1", n("Pirc: Classical", [
                        m("Bg4", "c8g4", n("Pirc: Classical", [
                          m("Be3", "c1e3", n("Pirc: Classical", [
                            m("Nc6", "b8c6", n("Pirc: Classical", [
                              m("Qd2", "d1d2", n("Pirc: Classical", [
                                m("e5", "e7e5", n("Pirc Classical Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),

    /* -------- 1...g6 Modern -------- */
    m("g6", "g7g6", n("Modern Defense", [
      m("d4", "d2d4", n("Modern Defense", [
        m("Bg7", "f8g7", n("Modern Defense", [
          m("Nc3", "b1c3", n("Modern Defense", [
            m("d6", "d7d6", n("Modern Defense", [
              m("Be3", "c1e3", n("Modern Defense", [
                m("a6", "a7a6", n("Modern Defense", [
                  m("Qd2", "d1d2", n("Modern Defense", [
                    m("b5", "b7b5", n("Modern Defense", [
                      m("f3", "f2f3", n("Modern Defense", [
                        m("Nd7", "b8d7", n("Modern Defense", [
                          m("Nge2", "g1e2", n("Modern Defense", [
                            m("Bb7", "c8b7", n("Modern Defense", [
                              m("O-O-O", "e1c1", n("Modern Defense Main Line"))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),

    m("b6", "b7b6", n("Owen's Defense")),
    m("Nc6", "b8c6", n("Nimzowitsch Defense"))
  ])),

  /* =========================== 1. d4 =========================== */
  m("d4", "d2d4", n("Queen's Pawn Opening", [

    m("d5", "d7d5", n("Closed Game", [

      m("c4", "c2c4", n("Queen's Gambit", [
        m("e6", "e7e6", n("Queen's Gambit Declined", [
          m("Nc3", "b1c3", n("QGD", [
            m("Nf6", "g8f6", n("QGD", [
              m("Bg5", "c1g5", n("QGD: Orthodox", [
                m("Be7", "f8e7", n("QGD: Orthodox", [
                  m("e3", "e2e3", n("QGD: Orthodox", [
                    m("O-O", "e8g8", n("QGD: Orthodox", [
                      m("Nf3", "g1f3", n("QGD: Orthodox", [
                        m("h6", "h7h6", n("QGD: Tartakower", [
                          m("Bh4", "g5h4", n("QGD: Tartakower", [
                            m("b6", "b7b6", n("QGD: Tartakower", [
                              m("Be2", "f1e2", n("QGD: Tartakower", [
                                m("Bb7", "c8b7", n("QGD: Tartakower", [
                                  m("Bxf6", "h4f6", n("QGD: Tartakower", [
                                    m("Bxf6", "e7f6", n("QGD: Tartakower", [
                                      m("cxd5", "c4d5", n("QGD: Tartakower", [
                                        m("exd5", "e6d5", n("QGD Tartakower Main Line"))
                                      ]))
                                    ]))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ])),
          m("Nf3", "g1f3", n("QGD", [
            m("Nf6", "g8f6", n("QGD", [
              m("Bg5", "c1g5", n("QGD", [
                m("Be7", "f8e7", n("QGD"))
              ]))
            ]))
          ]))
        ])),

        m("c6", "c7c6", n("Slav Defense", [
          m("Nf3", "g1f3", n("Slav Defense", [
            m("Nf6", "g8f6", n("Slav Defense", [
              m("Nc3", "b1c3", n("Slav Defense", [
                m("dxc4", "d5c4", n("Slav Defense", [
                  m("a4", "a2a4", n("Slav Defense", [
                    m("Bf5", "c8f5", n("Slav Defense", [
                      m("e3", "e2e3", n("Slav Defense", [
                        m("e6", "e7e6", n("Slav Defense", [
                          m("Bxc4", "f1c4", n("Slav Defense", [
                            m("Bb4", "f8b4", n("Slav Defense", [
                              m("O-O", "e1g1", n("Slav Defense", [
                                m("Nbd7", "b8d7", n("Slav Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ])),
          m("Nc3", "b1c3", n("Slav Defense", [
            m("dxc4", "d5c4", n("Slav Defense", [
              m("e4", "e2e4", n("Slav: Geller", [
                m("b5", "b7b5", n("Slav: Geller"))
              ]))
            ]))
          ]))
        ])),

        m("dxc4", "d5c4", n("Queen's Gambit Accepted", [
          m("Nf3", "g1f3", n("Queen's Gambit Accepted", [
            m("Nf6", "g8f6", n("Queen's Gambit Accepted", [
              m("e3", "e2e3", n("Queen's Gambit Accepted", [
                m("e6", "e7e6", n("Queen's Gambit Accepted", [
                  m("Bxc4", "f1c4", n("Queen's Gambit Accepted", [
                    m("c5", "c7c5", n("Queen's Gambit Accepted", [
                      m("O-O", "e1g1", n("Queen's Gambit Accepted", [
                        m("a6", "a7a6", n("Queen's Gambit Accepted", [
                          m("dxc5", "d4c5", n("Queen's Gambit Accepted", [
                            m("Qxd1", "d8d1", n("Queen's Gambit Accepted", [
                              m("Rxd1", "f1d1", n("Queen's Gambit Accepted", [
                                m("Bxc5", "f8c5", n("QGA Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ])),
          m("e3", "e2e3", n("Queen's Gambit Accepted", [
            m("e6", "e7e6", n("Queen's Gambit Accepted"))
          ]))
        ])),

        m("c5", "c7c5", n("Tarrasch Defense", [
          m("cxd5", "c4d5", n("Tarrasch Defense", [
            m("exd5", "e6d5", n("Tarrasch Defense", [
              m("Nf3", "g1f3", n("Tarrasch Defense", [
                m("Nc6", "b8c6", n("Tarrasch Defense", [
                  m("Bg5", "c1g5", n("Tarrasch Defense", [
                    m("Be7", "f8e7", n("Tarrasch Defense", [
                      m("Bxe7", "g5e7", n("Tarrasch Defense", [
                        m("Ngxe7", "g8e7", n("Tarrasch Defense", [
                          m("e3", "e2e3", n("Tarrasch Defense", [
                            m("c4", "c5c4", n("Tarrasch Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ])),

        m("Nf6", "g8f6", n("Marshall Defense", [
          m("Nf3", "g1f3", n("Marshall Defense"))
        ]))
      ])),

      m("Nf3", "g1f3", n("Queen's Pawn", [
        m("Nf6", "g8f6", n("Queen's Pawn", [
          m("Bf4", "c1f4", n("London System", [
            m("e6", "e7e6", n("London System", [
              m("e3", "e2e3", n("London System", [
                m("c5", "c7c5", n("London System", [
                  m("c3", "c2c3", n("London System", [
                    m("Nc6", "b8c6", n("London System", [
                      m("Nbd2", "b1d2", n("London System", [
                        m("Bd6", "f8d6", n("London System", [
                          m("Bg3", "f4g3", n("London System", [
                            m("O-O", "e8g8", n("London System Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ])),
          m("c4", "c2c4", n("Queen's Pawn", [
            m("e6", "e7e6", n("Transposition to QGD"))
          ]))
        ]))
      ])),
      m("Bf4", "c1f4", n("London System", [
        m("Nf6", "g8f6", n("London System", [
          m("e3", "e2e3", n("London System", [
            m("e6", "e7e6", n("London System", [
              m("Nf3", "g1f3", n("London System", [
                m("c5", "c7c5", n("London System", [
                  m("c3", "c2c3", n("London System", [
                    m("Nc6", "b8c6", n("London System"))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),

    m("Nf6", "g8f6", n("Indian Defense", [
      m("c4", "c2c4", n("Indian Defense", [

        /* Nimzo-Indian */
        m("e6", "e7e6", n("Nimzo-Indian", [
          m("Nc3", "b1c3", n("Nimzo-Indian", [
            m("Bb4", "f8b4", n("Nimzo-Indian", [
              m("e3", "e2e3", n("Nimzo-Indian", [
                m("O-O", "e8g8", n("Nimzo-Indian", [
                  m("Bd3", "f1d3", n("Nimzo-Indian", [
                    m("d5", "d7d5", n("Nimzo-Indian", [
                      m("Nf3", "g1f3", n("Nimzo-Indian", [
                        m("c5", "c7c5", n("Nimzo-Indian", [
                          m("O-O", "e1g1", n("Nimzo-Indian", [
                            m("Nc6", "b8c6", n("Nimzo-Indian", [
                              m("a3", "a2a3", n("Nimzo-Indian", [
                                m("Bxc3", "b4c3", n("Nimzo-Indian", [
                                  m("bxc3", "b2c3", n("Nimzo-Indian", [
                                    m("dxc4", "d5c4", n("Nimzo-Indian Main Line"))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ])),
              m("Qc2", "d1c2", n("Nimzo-Indian: Capablanca", [
                m("O-O", "e8g8", n("Nimzo-Indian: Capablanca"))
              ]))
            ]))
          ]))
        ])),

        /* King's Indian */
        m("g6", "g7g6", n("King's Indian Defense", [
          m("Nc3", "b1c3", n("King's Indian Defense", [
            m("Bg7", "f8g7", n("King's Indian Defense", [
              m("e4", "e2e4", n("King's Indian Defense", [
                m("d6", "d7d6", n("King's Indian Defense", [
                  m("Nf3", "g1f3", n("King's Indian: Classical", [
                    m("O-O", "e8g8", n("King's Indian: Classical", [
                      m("Be2", "f1e2", n("King's Indian: Classical", [
                        m("e5", "e7e5", n("King's Indian: Classical", [
                          m("O-O", "e1g1", n("King's Indian: Classical", [
                            m("Nc6", "b8c6", n("King's Indian: Classical", [
                              m("d5", "d4d5", n("King's Indian: Classical", [
                                m("Ne7", "c6e7", n("King's Indian: Classical", [
                                  m("b4", "b2b4", n("King's Indian: Classical", [
                                    m("Nh5", "f6h5", n("King's Indian Classical Main Line"))
                                  ]))
                                ]))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ])),
                  m("f3", "f2f3", n("King's Indian: Sämisch", [
                    m("O-O", "e8g8", n("King's Indian: Sämisch", [
                      m("Be3", "c1e3", n("King's Indian: Sämisch", [
                        m("e5", "e7e5", n("King's Indian: Sämisch", [
                          m("d5", "d4d5", n("King's Indian: Sämisch Main Line"))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ])),

        /* Queen's Indian */
        m("e6", "e7e6", n("Queen's Indian Defense", [
          m("Nf3", "g1f3", n("Queen's Indian Defense", [
            m("b6", "b7b6", n("Queen's Indian Defense", [
              m("g3", "g2g3", n("Queen's Indian Defense", [
                m("Bb7", "c8b7", n("Queen's Indian Defense", [
                  m("Bg2", "f1g2", n("Queen's Indian Defense", [
                    m("Be7", "f8e7", n("Queen's Indian Defense", [
                      m("O-O", "e1g1", n("Queen's Indian Defense", [
                        m("O-O", "e8g8", n("Queen's Indian Defense", [
                          m("Nc3", "b1c3", n("Queen's Indian Defense", [
                            m("Ne4", "f6e4", n("Queen's Indian Defense", [
                              m("Qc2", "d1c2", n("Queen's Indian Defense", [
                                m("Nxc3", "e4c3", n("Queen's Indian Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ])),

        /* Benoni */
        m("c5", "c7c5", n("Benoni Defense", [
          m("d5", "d4d5", n("Benoni Defense", [
            m("e6", "e7e6", n("Benoni Defense", [
              m("Nc3", "b1c3", n("Benoni Defense", [
                m("exd5", "e6d5", n("Benoni Defense", [
                  m("cxd5", "c4d5", n("Benoni Defense", [
                    m("d6", "d7d6", n("Benoni Defense", [
                      m("e4", "e2e4", n("Benoni Defense", [
                        m("g6", "g7g6", n("Benoni Defense", [
                          m("Nf3", "g1f3", n("Benoni Defense", [
                            m("Bg7", "f8g7", n("Benoni Defense", [
                              m("Be2", "f1e2", n("Benoni Defense", [
                                m("O-O", "e8g8", n("Benoni Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ])),

        /* Budapest */
        m("e5", "e7e5", n("Budapest Gambit", [
          m("dxe5", "d4e5", n("Budapest Gambit", [
            m("Ng4", "f6g4", n("Budapest Gambit", [
              m("Bf4", "c1f4", n("Budapest Gambit", [
                m("Nc6", "b8c6", n("Budapest Gambit"))
              ]))
            ]))
          ]))
        ]))
      ])),
      m("Nf3", "g1f3", n("Indian Defense", [
        m("g6", "g7g6", n("King's Indian Setup", [
          m("c4", "c2c4", n("King's Indian Setup", [
            m("Bg7", "f8g7", n("King's Indian Setup", [
              m("Nc3", "b1c3", n("King's Indian Setup", [
                m("d6", "d7d6", n("King's Indian Setup", [
                  m("e4", "e2e4", n("King's Indian Setup", [
                    m("O-O", "e8g8", n("King's Indian Setup"))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),

    m("f5", "f7f5", n("Dutch Defense", [
      m("g3", "g2g3", n("Dutch Defense", [
        m("Nf6", "g8f6", n("Dutch Defense", [
          m("Bg2", "f1g2", n("Dutch Defense", [
            m("e6", "e7e6", n("Dutch Defense", [
              m("Nf3", "g1f3", n("Dutch Defense", [
                m("Be7", "f8e7", n("Dutch Defense", [
                  m("O-O", "e1g1", n("Dutch Defense", [
                    m("O-O", "e8g8", n("Dutch Defense", [
                      m("c4", "c2c4", n("Dutch Defense", [
                        m("d6", "d7d6", n("Dutch Defense", [
                          m("Nc3", "b1c3", n("Dutch Defense", [
                            m("Qe8", "d8e8", n("Dutch Defense", [
                              m("Re1", "f1e1", n("Dutch Defense", [
                                m("Qg6", "e8g6", n("Dutch Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ])),
      m("c4", "c2c4", n("Dutch Defense", [
        m("Nf6", "g8f6", n("Dutch Defense", [
          m("Nc3", "b1c3", n("Dutch Defense", [
            m("e6", "e7e6", n("Dutch Defense", [
              m("Nf3", "g1f3", n("Dutch Defense", [
                m("Bb4", "f8b4", n("Dutch Defense", [
                  m("e3", "e2e3", n("Dutch Defense", [
                    m("O-O", "e8g8", n("Dutch Defense", [
                      m("Bd3", "f1d3", n("Dutch Defense", [
                        m("d5", "d7d5", n("Dutch Defense", [
                          m("O-O", "e1g1", n("Dutch Defense", [
                            m("c6", "c7c6", n("Dutch Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),

    m("e6", "e7e6", n("Dutch Defense (via e6)", [
      m("c4", "c2c4", n("Dutch Defense", [
        m("f5", "f7f5", n("Dutch Defense"))
      ]))
    ])),
    m("d6", "d7d6", n("Pirc Setup", [
      m("e4", "e2e4", n("Transposition to Pirc"))
    ])),
    m("c5", "c7c5", n("Benoni Defense")),
    m("g6", "g7g6", n("Modern Defense"))
  ])),

  /* =========================== 1. c4 =========================== */
  m("c4", "c2c4", n("English Opening", [
    m("e5", "e7e5", n("English: Reversed Sicilian", [
      m("Nc3", "b1c3", n("English: Reversed Sicilian", [
        m("Nf6", "g8f6", n("English: Four Knights", [
          m("Nf3", "g1f3", n("English: Four Knights", [
            m("Nc6", "b8c6", n("English: Four Knights", [
              m("g3", "g2g3", n("English: Four Knights", [
                m("Bb4", "f8b4", n("English: Four Knights", [
                  m("Bg2", "f1g2", n("English: Four Knights", [
                    m("O-O", "e8g8", n("English: Four Knights", [
                      m("O-O", "e1g1", n("English: Four Knights", [
                        m("Re8", "f8e8", n("English: Four Knights", [
                          m("Nd5", "f3d5", n("English: Four Knights", [
                            m("Bf8", "b4f8", n("English: Four Knights", [
                              m("d3", "d2d3", n("English: Four Knights", [
                                m("d6", "d7d6", n("English Four Knights Main Line"))
                              ]))
                            ]))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),
    m("Nf6", "g8f6", n("English: Anglo-Indian", [
      m("Nc3", "b1c3", n("English: Anglo-Indian", [
        m("e6", "e7e6", n("English: Anglo-Indian", [
          m("Nf3", "g1f3", n("English: Anglo-Indian", [
            m("d5", "d7d5", n("English: Anglo-Indian", [
              m("cxd5", "c4d5", n("English: Anglo-Indian", [
                m("exd5", "e6d5", n("English: Anglo-Indian", [
                  m("d4", "d2d4", n("English: Anglo-Indian", [
                    m("Be7", "f8e7", n("English: Anglo-Indian", [
                      m("Bg5", "c1g5", n("English: Anglo-Indian", [
                        m("O-O", "e8g8", n("English: Anglo-Indian", [
                          m("e3", "e2e3", n("English: Anglo-Indian", [
                            m("c6", "c7c6", n("English Anglo-Indian Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),
    m("c5", "c7c5", n("English: Symmetrical", [
      m("Nf3", "g1f3", n("English: Symmetrical", [
        m("Nf6", "g8f6", n("English: Symmetrical", [
          m("d4", "d2d4", n("English: Symmetrical", [
            m("cxd4", "c5d4", n("English: Symmetrical", [
              m("Nxd4", "f3d4", n("English: Symmetrical", [
                m("e6", "e7e6", n("English: Symmetrical", [
                  m("Nc3", "b1c3", n("English: Symmetrical", [
                    m("Nc6", "b8c6", n("English: Symmetrical", [
                      m("g3", "g2g3", n("English: Symmetrical", [
                        m("Qb6", "d8b6", n("English: Symmetrical", [
                          m("Nb3", "d4b3", n("English: Symmetrical", [
                            m("Ne5", "c6e5", n("English Symmetrical Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),
    m("e6", "e7e6", n("English: Agincourt", [
      m("Nf3", "g1f3", n("English: Agincourt", [
        m("d5", "d7d5", n("English: Agincourt", [
          m("g3", "g2g3", n("English: Agincourt", [
            m("Nf6", "g8f6", n("English: Agincourt", [
              m("Bg2", "f1g2", n("English: Agincourt", [
                m("Be7", "f8e7", n("English: Agincourt", [
                  m("O-O", "e1g1", n("English: Agincourt", [
                    m("O-O", "e8g8", n("English: Agincourt", [
                      m("b3", "b2b3", n("English: Agincourt", [
                        m("c5", "c7c5", n("English: Agincourt", [
                          m("Bb2", "c1b2", n("English: Agincourt", [
                            m("Nc6", "b8c6", n("English Agincourt Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ]))
  ])),

  /* =========================== 1. Nf3 =========================== */
  m("Nf3", "g1f3", n("Zukertort Opening", [
    m("d5", "d7d5", n("King's Indian Attack", [
      m("g3", "g2g3", n("King's Indian Attack", [
        m("Nf6", "g8f6", n("King's Indian Attack", [
          m("Bg2", "f1g2", n("King's Indian Attack", [
            m("c6", "c7c6", n("King's Indian Attack", [
              m("O-O", "e1g1", n("King's Indian Attack", [
                m("Bg4", "c8g4", n("King's Indian Attack", [
                  m("d3", "d2d3", n("King's Indian Attack", [
                    m("Nbd7", "b8d7", n("King's Indian Attack", [
                      m("Nbd2", "b1d2", n("King's Indian Attack", [
                        m("e5", "e7e5", n("King's Indian Attack", [
                          m("e4", "e2e4", n("King's Indian Attack", [
                            m("dxe4", "d5e4", n("King's Indian Attack Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ])),
    m("Nf6", "g8f6", n("Zukertort Opening", [
      m("c4", "c2c4", n("Transposition to English", [
        m("e6", "e7e6", n("Transposition to English", [
          m("Nc3", "b1c3", n("Transposition to English", [
            m("d5", "d7d5", n("Transposition", [
              m("d4", "d2d4", n("Transposition to QGD", [
                m("Be7", "f8e7", n("Transposition to QGD", [
                  m("Bf4", "c1f4", n("Transposition", [
                    m("O-O", "e8g8", n("Transposition", [
                      m("e3", "e2e3", n("Transposition", [
                        m("c5", "c7c5", n("Transposition", [
                          m("dxc5", "d4c5", n("Transposition", [
                            m("Bxc5", "e7c5", n("Transposition Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ]))
  ])),

  /* =========================== 1. f4 =========================== */
  m("f4", "f2f4", n("Bird's Opening", [
    m("d5", "d7d5", n("Bird's Opening", [
      m("Nf3", "g1f3", n("Bird's Opening", [
        m("Nf6", "g8f6", n("Bird's Opening", [
          m("e3", "e2e3", n("Bird's Opening", [
            m("g6", "g7g6", n("Bird's Opening", [
              m("b3", "b2b3", n("Bird's Opening", [
                m("Bg7", "f8g7", n("Bird's Opening", [
                  m("Bb2", "c1b2", n("Bird's Opening", [
                    m("O-O", "e8g8", n("Bird's Opening", [
                      m("Be2", "f1e2", n("Bird's Opening", [
                        m("c5", "c7c5", n("Bird's Opening", [
                          m("O-O", "e1g1", n("Bird's Opening", [
                            m("Nc6", "b8c6", n("Bird's Opening Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ]))
  ])),

  /* =========================== 1. b3 =========================== */
  m("b3", "b2b3", n("Nimzo-Larsen Attack", [
    m("e5", "e7e5", n("Nimzo-Larsen Attack", [
      m("Bb2", "c1b2", n("Nimzo-Larsen Attack", [
        m("Nc6", "b8c6", n("Nimzo-Larsen Attack", [
          m("e3", "e2e3", n("Nimzo-Larsen Attack", [
            m("Nf6", "g8f6", n("Nimzo-Larsen Attack", [
              m("Bb5", "f1b5", n("Nimzo-Larsen Attack", [
                m("Bd6", "f8d6", n("Nimzo-Larsen Attack", [
                  m("Na3", "b1a3", n("Nimzo-Larsen Attack", [
                    m("O-O", "e8g8", n("Nimzo-Larsen Attack", [
                      m("Nf3", "g1f3", n("Nimzo-Larsen Attack", [
                        m("Re8", "f8e8", n("Nimzo-Larsen Attack", [
                          m("O-O", "e1g1", n("Nimzo-Larsen Attack", [
                            m("a6", "a7a6", n("Nimzo-Larsen Main Line"))
                          ]))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ]))
  ])),

  /* =========================== 1. g3 =========================== */
  m("g3", "g2g3", n("Benko Opening", [
    m("d5", "d7d5", n("Benko Opening", [
      m("Bg2", "f1g2", n("Benko Opening", [
        m("e5", "e7e5", n("Benko Opening", [
          m("d3", "d2d3", n("Benko Opening", [
            m("Nf6", "g8f6", n("Benko Opening", [
              m("Nf3", "g1f3", n("Benko Opening", [
                m("Nc6", "b8c6", n("Benko Opening", [
                  m("O-O", "e1g1", n("Benko Opening", [
                    m("Be7", "f8e7", n("Benko Opening", [
                      m("c4", "c2c4", n("Benko Opening", [
                        m("d4", "d5d4", n("Benko Opening", [
                          m("e3", "e2e3", n("Benko Opening Main Line"))
                        ]))
                      ]))
                    ]))
                  ]))
                ]))
              ]))
            ]))
          ]))
        ]))
      ]))
    ]))
  ]))
]);
