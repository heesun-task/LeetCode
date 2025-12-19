/**
 * @param {number} n n people numbered from 0 to n - 1 (n >= 2)
 * @param {number[][]} meetings meetings[i] = [xi, yi, timei] indicates that person xi and person yi have a meeting at timei (meetings>=1)
 * @param {number} firstPerson 1 <= firstPerson <= n - 1
 * @return {number[]}  list of all  people that have  secret after all meetings (in any order)
 */
 /**
 * Key idea:
 * - Meetings at the same time happen “simultaneously”.
 * - So we must process meetings grouped by time.
 * - For each time t:
 *   1) Build a temporary graph using only the people who meet at time t.
 *   2) In that graph, if a connected component contains someone who already knows the secret,
 *      then everyone in that component learns the secret at time t (instant sharing within t).
 *   3) After finishing time t, discard the temporary connections (they do NOT carry over to next times).
 * - Only the set of people who know the secret persists across times.
 *
 */

/**
    E.g., n = 4, meetings = [[3,1,3],[1,2,2],[0,3,3]], firstPerson = 3
    knows =     Set(2) {0, 3}
    byTime =    Map(2) {2: [[1,2]], 3:[[3,1],[0,3]]}
    times =     [2, 3]

    when t = 2
        edges =     [[1,2]]
        people =    Set(2) {1,2}
        adj =       Map(2) {1: [2], 2:[1]}

        // spread scret.
        // put people who are already in knows into the queue
        q = [0]
        visited = {0}
        
        // BFS does nothing
        knows stays {0,3}

    when t = 3
        edges = ..
        people = {0, 1, 3}
        ...
        q = [0, 3]
        ...
        knows = {0, 1, 3}

 */

/**
 * Time:  O(m log m + m)  (m = meetings.length)
 * Space: O(m + n) (but per-time adjacency is temporary)
 */
var findAllPeople = function (n, meetings, firstPerson) {
  const knows = new Set([0, firstPerson]);

  // Group meetings by time: t -> list of [x, y]
  const byTime = new Map();
  for (const [x, y, t] of meetings) {
    if (!byTime.has(t)) byTime.set(t, []);
    byTime.get(t).push([x, y]);
  }

  const times = Array.from(byTime.keys()).sort((a, b) => a - b);

  for (const t of times) {
    const edges = byTime.get(t);

    // Build temporary graph for this time t only
    const adj = new Map();     // person -> neighbors[]
    const people = new Set();  // all people who appear at time t

    for (const [x, y] of edges) {
      people.add(x);
      people.add(y);

      if (!adj.has(x)) adj.set(x, []);
      if (!adj.has(y)) adj.set(y, []);
      adj.get(x).push(y);
      adj.get(y).push(x);
    }

    // Multi-source BFS from people at time t who already know the secret
    const q = [];
    const visited = new Set();

    for (const p of people) {
      if (knows.has(p)) {
        q.push(p);
        visited.add(p);
      }
    }

    while (q.length) {
      const cur = q.pop();
      const nbrs = adj.get(cur) || [];
      for (const nxt of nbrs) {
        if (!visited.has(nxt)) {
          visited.add(nxt);
          q.push(nxt);
        }
      }
    }

    // Everyone reached within time t learns the secret
    for (const p of visited) knows.add(p);
    // adj/people/visited are discarded automatically by scope (connections do NOT persist)
  }

  return Array.from(knows);
};