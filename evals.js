"use strict";

/* ============================================================
   Position evaluations — attached to the tree defined in moves.js
   ============================================================

   Keys   : space-separated UCI move sequence from the start position
   Values : evaluation in pawns from White's perspective
            +0.3 = White slightly better, -1.0 = Black is a pawn up,
             0.0 = dead equal.
            (You can also use {mate: N} for forced mates — the UI
            already understands it, though nothing here uses it.)

   How scores reach every position:
   • Nodes with an explicit entry in EVALS get that score.
   • Every other node INHERITS the score of its parent, so you only
     need to annotate the spots where the evaluation changes.
   ============================================================ */

const EVALS = {

  /* ---------------- starting position & first moves ------------- */
  "":                                                            0.0,
  "e2e4":                                                        0.3,
  "d2d4":                                                        0.2,
  "c2c4":                                                        0.2,
  "g1f3":                                                        0.2,
  "f2f4":                                                        0.1,
  "b2b3":                                                        0.1,
  "g2g3":                                                        0.1,

  /* ============================ 1.e4 ============================ */
  "e2e4 e7e5":                                                   0.2,   // Open Game
  "e2e4 c7c5":                                                   0.2,   // Sicilian
  "e2e4 e7e6":                                                   0.3,   // French
  "e2e4 c7c6":                                                   0.2,   // Caro-Kann
  "e2e4 d7d5":                                                   0.3,   // Scandinavian
  "e2e4 g8f6":                                                   0.3,   // Alekhine
  "e2e4 d7d6":                                                   0.3,   // Pirc
  "e2e4 g7g6":                                                   0.3,   // Modern
  "e2e4 b7b6":                                                   0.3,
  "e2e4 b8c6":                                                   0.3,

  /* -------- 1.e4 e5 ---------- */
  "e2e4 e7e5 g1f3 b8c6 f1b5":                                   0.2,   // Ruy Lopez
  "e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6":                     0.2,   // Closed Ruy
  "e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6":                          0.1,   // Exchange
  "e2e4 e7e5 g1f3 b8c6 f1b5 g8f6":                               0.2,   // Berlin
  "e2e4 e7e5 g1f3 b8c6 f1b5 f8c5":                               0.1,   // Classical
  "e2e4 e7e5 g1f3 b8c6 f1c4":                                    0.2,   // Italian
  "e2e4 e7e5 g1f3 b8c6 f1c4 f8c5":                               0.2,   // Giuoco Piano
  "e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4":                          0.0,   // Evans Gambit
  "e2e4 e7e5 g1f3 b8c6 f1c4 g8f6":                               0.1,   // Two Knights
  "e2e4 e7e5 g1f3 b8c6 d2d4":                                    0.2,   // Scotch
  "e2e4 e7e5 g1f3 b8c6 b1c3":                                    0.1,   // Four Knights
  "e2e4 e7e5 g1f3 g8f6":                                         0.0,   // Petrov
  "e2e4 e7e5 g1f3 d7d6":                                         0.3,   // Philidor
  "e2e4 e7e5 b1c3":                                              0.1,   // Vienna
  "e2e4 e7e5 f2f4":                                             -0.2,   // King's Gambit
  "e2e4 e7e5 f1c4":                                              0.2,   // Bishop's
  "e2e4 e7e5 d2d4":                                              0.1,   // Center Game

  /* -------- 1.e4 c5 ---------- */
  "e2e4 c7c5 g1f3":                                              0.2,
  "e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3":                0.0,   // Open Sicilian
  "e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6":            0.0,   // Najdorf
  "e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6":           -0.1,   // Dragon
  "e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6":            0.1,   // Scheveningen
  "e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5":            0.0,   // Sveshnikov
  "e2e4 c7c5 g1f3 e7e6":                                         0.2,   // Kan
  "e2e4 c7c5 b1c3":                                              0.2,   // Closed Sicilian
  "e2e4 c7c5 c2c3":                                              0.2,   // Alapin
  "e2e4 c7c5 d2d4":                                              0.0,   // Smith-Morra

  /* -------- 1.e4 e6 ---------- */
  "e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5":                          0.1,   // Steinitz
  "e2e4 e7e6 d2d4 d7d5 b1c3 f8b4":                              -0.1,   // Winawer
  "e2e4 e7e6 d2d4 d7d5 b1d2":                                    0.2,   // Tarrasch
  "e2e4 e7e6 d2d4 d7d5 e4e5":                                    0.3,   // Advance
  "e2e4 e7e6 d2d4 d7d5 e4d5":                                    0.0,   // Exchange

  /* -------- 1.e4 c6 ---------- */
  "e2e4 c7c6 d2d4 d7d5 b1c3":                                    0.2,   // Classical
  "e2e4 c7c6 d2d4 d7d5 e4e5":                                    0.2,   // Advance
  "e2e4 c7c6 d2d4 d7d5 e4d5":                                    0.1,   // Exchange
  "e2e4 c7c6 d2d4 d7d5 b1d2":                                    0.1,   // Karpov

  /* -------- misc 1.e4 ---------- */
  "e2e4 d7d5 e4d5 d8d5 b1c3":                                    0.3,   // Scandinavian
  "e2e4 g8f6 e4e5 f6d5":                                         0.3,   // Alekhine
  "e2e4 d7d6 d2d4 g8f6 b1c3 g7g6":                               0.2,   // Pirc
  "e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3":                         -0.1,   // Austrian Attack
  "e2e4 g7g6 d2d4 f8g7":                                         0.2,   // Modern

  /* ============================ 1.d4 ============================ */
  "d2d4 d7d5":                                                   0.2,
  "d2d4 g8f6":                                                   0.2,
  "d2d4 f7f5":                                                   0.1,   // Dutch
  "d2d4 e7e6":                                                   0.2,
  "d2d4 d7d6":                                                   0.3,
  "d2d4 c7c5":                                                   0.3,
  "d2d4 g7g6":                                                   0.2,

  "d2d4 d7d5 c2c4":                                              0.2,   // Queen's Gambit
  "d2d4 d7d5 c2c4 e7e6":                                         0.2,   // QGD
  "d2d4 d7d5 c2c4 c7c6":                                         0.1,   // Slav
  "d2d4 d7d5 c2c4 d5c4":                                         0.2,   // QGA
  "d2d4 d7d5 c2c4 c7c5":                                         0.2,   // Tarrasch
  "d2d4 d7d5 g1f3 g8f6 c1f4":                                    0.2,   // London
  "d2d4 d7d5 c1f4":                                              0.2,   // London

  "d2d4 g8f6 c2c4 e7e6 b1c3 f8b4":                               0.1,   // Nimzo-Indian
  "d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6":                    -0.1,   // King's Indian
  "d2d4 g8f6 c2c4 e7e6 g1f3 b7b6":                               0.1,   // Queen's Indian
  "d2d4 g8f6 c2c4 c7c5 d4d5":                                    0.3,   // Benoni
  "d2d4 g8f6 c2c4 e7e5":                                         0.3,   // Budapest
  "d2d4 g8f6 g1f3 g7g6":                                         0.1,   // KID setup

  "d2d4 f7f5 g2g3":                                              0.0,   // Dutch (g3)
  "d2d4 f7f5 c2c4":                                              0.0,   // Dutch (c4)

  /* ============================ 1.c4 ============================ */
  "c2c4 e7e5":                                                   0.1,
  "c2c4 g8f6":                                                   0.2,
  "c2c4 c7c5":                                                   0.1,
  "c2c4 e7e6":                                                   0.2,

  "c2c4 e7e5 b1c3 g8f6 g1f3 b8c6":                               0.1,   // Four Knights
  "c2c4 g8f6 b1c3 e7e6 g1f3 d7d5":                               0.2,   // Anglo-Indian
  "c2c4 c7c5 g1f3 g8f6 d2d4":                                    0.1,   // Symmetrical
  "c2c4 e7e6 g1f3 d7d5":                                         0.2,   // Agincourt

  /* ============================ others ========================== */
  "g1f3 d7d5":                                                   0.2,
  "g1f3 g8f6":                                                   0.2,
  "g1f3 d7d5 g2g3":                                              0.2,   // KIA
  "f2f4 d7d5":                                                   0.2,   // Bird's
  "b2b3 e7e5":                                                   0.1,   // Nimzo-Larsen
  "g2g3 d7d5":                                                   0.2    // Benko
};

/* -------- walk the tree once, filling in inherited scores -------- */
(function attachEvals() {
  if (typeof ROOT === "undefined") return;

  function walk(node, inherited, pathArr) {
    const key   = pathArr.join(" ");
    const own   = EVALS[key];
    const score = (own !== undefined && own !== null) ? own : inherited;
    node.score = score;
    for (const mv of node.children) {
      pathArr.push(mv.uci);
      walk(mv.next, score, pathArr);
      pathArr.pop();
    }
  }
  walk(ROOT, 0.0, []);
})();