# Cheat Sheet: VS Code für Play 1

Die wichtigsten Tastenbefehle für unser Setup: VS Code, p5.js, Live Server, Prettier.
Mac zuerst, Windows in Klammern.

`⌘` Cmd · `⌥` Option/Alt · `⇧` Shift · `⌃` Control · `↵` Enter

---

## Die Top 7 für den Anfang

| Was | Mac | Windows |
| --- | --- | --- |
| Speichern (Live Server lädt neu, Prettier formatiert) | `⌘S` | `Ctrl+S` |
| Zeile aus- und einkommentieren | `⌘/` | `Ctrl+/` |
| Rückgängig / Wiederholen | `⌘Z` / `⇧⌘Z` | `Ctrl+Z` / `Ctrl+Y` |
| Nächstes gleiches Wort mit auswählen | `⌘D` | `Ctrl+D` |
| Variable überall umbenennen | `F2` | `F2` |
| Zeile verschieben | `⌥↑` / `⌥↓` | `Alt+↑` / `Alt+↓` |
| Befehl suchen, wenn du einen Shortcut vergessen hast | `⇧⌘P` | `Ctrl+Shift+P` |

---

## Bearbeiten

| Was | Mac | Windows |
| --- | --- | --- |
| Zeile aus-/einkommentieren `//` | `⌘/` | `Ctrl+/` |
| Block-Kommentar `/* */` | `⇧⌥A` | `Shift+Alt+A` |
| Zeile verschieben | `⌥↑` / `⌥↓` | `Alt+↑` / `Alt+↓` |
| Zeile kopieren (nach oben / unten) | `⇧⌥↑` / `⇧⌥↓` | `Shift+Alt+↑` / `Shift+Alt+↓` |
| Zeile löschen | `⇧⌘K` | `Ctrl+Shift+K` |
| Neue Zeile darunter, egal wo der Cursor steht | `⌘↵` | `Ctrl+Enter` |
| Einrücken / Ausrücken | `Tab` / `⇧Tab` | `Tab` / `Shift+Tab` |
| Code formatieren (Prettier) | `⇧⌥F` | `Shift+Alt+F` |
| Lange Zeilen umbrechen (nur Ansicht) | `⌥Z` | `Alt+Z` |

## Mehrere Stellen gleichzeitig

| Was | Mac | Windows |
| --- | --- | --- |
| Nächstes gleiches Wort dazu auswählen (mehrmals drücken) | `⌘D` | `Ctrl+D` |
| Alle gleichen Wörter auswählen | `⇧⌘L` | `Ctrl+Shift+L` |
| Variable oder Funktion sicher umbenennen (nur diese, nicht gleich geschriebene Wörter in Kommentaren) | `F2` | `F2` |
| Zusätzlichen Cursor setzen | `⌥` + Klick | `Alt` + Klick |
| Cursor in der Zeile darüber / darunter dazu | `⌥⌘↑` / `⌥⌘↓` | `Ctrl+Alt+↑` / `Ctrl+Alt+↓` |
| Spalte auswählen | `⇧⌥` + Ziehen | `Shift+Alt` + Ziehen |
| Zurück zu einem Cursor | `Esc` | `Esc` |

> **`⌘D` oder `F2`?** `⌘D` wählt jedes gleich geschriebene Wort, auch in Kommentaren oder in
> `xPos` wenn du `x` suchst. `F2` versteht den Code und benennt nur die eine Variable um.

## Finden und Navigieren

| Was | Mac | Windows |
| --- | --- | --- |
| In der Datei suchen / ersetzen | `⌘F` / `⌥⌘F` | `Ctrl+F` / `Ctrl+H` |
| In allen Dateien suchen | `⇧⌘F` | `Ctrl+Shift+F` |
| Datei schnell öffnen (Name tippen) | `⌘P` | `Ctrl+P` |
| Zu Zeile springen (z. B. aus einer Fehlermeldung) | `⌃G` | `Ctrl+G` |
| Zu einer Funktion in der Datei springen | `⇧⌘O` | `Ctrl+Shift+O` |
| Zur Definition springen | `⌘` + Klick oder `F12` | `Ctrl` + Klick oder `F12` |
| Zur passenden Klammer springen | `⇧⌘\` | `Ctrl+Shift+\` |
| Code-Block ein- / ausklappen | `⌥⌘[` / `⌥⌘]` | `Ctrl+Shift+[` / `Ctrl+Shift+]` |

## Hilfe beim Schreiben

| Was | Mac | Windows |
| --- | --- | --- |
| Vorschläge anzeigen (erscheinen meist von selbst beim Tippen) | `⌃Space` ¹ | `Ctrl+Space` |
| Welche Parameter braucht die Funktion? (Cursor in den Klammern) | `⇧⌘Space` | `Ctrl+Shift+Space` |
| Erklärung zu `rect`, `fill` usw. | Maus darüber halten | Maus darüber halten |
| Fehler und Warnungen der Datei | `⇧⌘M` | `Ctrl+Shift+M` |
| Schnelle Korrektur bei einer rot unterstrichenen Stelle | `⌘.` | `Ctrl+.` |
| HTML-Grundgerüst in leerer `index.html` | `!` dann `Tab` | `!` dann `Tab` |

¹ Hast du auf dem Mac mehrere Eingabequellen (z. B. «Deutsch – Schweiz» und «ABC»), wechselt
`⌃Space` die Tastatursprache statt Vorschläge zu zeigen. Abhilfe: Systemeinstellungen → Tastatur →
Tastaturkurzbefehle → Eingabequellen ausschalten, oder in VS Code «Trigger Suggest» neu belegen
(`⌘K` `⌘S`).

## Fenster

| Was | Mac | Windows |
| --- | --- | --- |
| Befehlspalette | `⇧⌘P` | `Ctrl+Shift+P` |
| Seitenleiste ein / aus | `⌘B` | `Ctrl+B` |
| Explorer (Dateien) | `⇧⌘E` | `Ctrl+Shift+E` |
| Extensions | `⇧⌘X` | `Ctrl+Shift+X` |
| Git (Source Control) | `⌃⇧G` | `Ctrl+Shift+G` |
| Terminal ein / aus | `` ⌃` `` | `` Ctrl+` `` |
| Editor teilen (zwei Dateien nebeneinander) | `⌘\` | `Ctrl+\` |
| Tab schliessen | `⌘W` | `Ctrl+W` |
| Zwischen offenen Tabs wechseln | `⌃Tab` | `Ctrl+Tab` |
| Einstellungen | `⌘,` | `Ctrl+,` |
| Alle Tastenbefehle ansehen und ändern | `⌘K` `⌘S` | `Ctrl+K` `Ctrl+S` |

---

## Unser Setup

| Was | Wie |
| --- | --- |
| Neues p5-Projekt | `⇧⌘P` → **Create p5.js Project** (Extension p5.vscode) |
| Sketch im Browser starten | Unten rechts **Go Live** klicken, oder Rechtsklick auf `index.html` → **Open with Live Server** |
| Live Server per Tastatur starten / stoppen | `⌘L` `⌘O` / `⌘L` `⌘C` (Windows: `Alt+L` `Alt+O` / `Alt+L` `Alt+C`) |
| Code beim Speichern automatisch formatieren | Einmal einrichten: Einstellungen → **Default Formatter** = Prettier, **Format On Save** an (siehe `00-Setup`) |
| CSV lesbar machen | Rainbow CSV färbt die Spalten automatisch ein |

### Im Browser

| Was | Mac | Windows |
| --- | --- | --- |
| Konsole öffnen (Chrome) | `⌥⌘J` | `Ctrl+Shift+J` |
| Konsole öffnen (Firefox) | `⌥⌘K` | `Ctrl+Shift+K` |
| Neu laden ohne Cache | `⇧⌘R` | `Ctrl+Shift+R` |

> **Immer offen lassen:** VS Code links, Browser mit Konsole rechts. Fehler stehen zuerst in der
> Konsole, mit Dateiname und Zeilennummer. Dann `⌃G` und die Zeile eintippen.

---

## Schweizer Tastatur

Manche Shortcuts gehen auf der Schweizer Tastatur anders, weil Zeichen wie `/`, `[`, `]`, `\`
und `` ` `` dort mit `⇧` oder `⌥` getippt werden. Wenn ein Shortcut nicht funktioniert:

1. `⇧⌘P` öffnen und den Befehl beim Namen suchen, z. B. «Toggle Line Comment».
2. Rechts daneben steht der Shortcut, der auf deiner Tastatur gilt.
3. Oder selbst einen setzen: `⌘K` `⌘S` → Befehl suchen → Doppelklick → neue Taste drücken.
