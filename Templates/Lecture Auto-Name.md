<%*
// Shared lecture template for every course's Lectures/ folder.
// Auto-names this note "Lecture N - YYYY-MM-DD" and auto-links the course
// by reading ../_Course Info.md relative to this folder.

const lecturesFolder = tp.file.folder(true); // e.g. "Courses/CHEM 042 - Chemistry in the Modern World/Lectures"
const courseFolder = lecturesFolder.substring(0, lecturesFolder.lastIndexOf("/"));
const courseInfoPath = courseFolder + "/_Course Info.md";
const courseInfoFile = app.vault.getAbstractFileByPath(courseInfoPath);

let courseCode = "Unknown Course";
if (courseInfoFile) {
	const fm = app.metadataCache.getFileCache(courseInfoFile)?.frontmatter;
	if (fm && fm.code) courseCode = fm.code;
}

const folderObj = app.vault.getAbstractFileByPath(lecturesFolder);
let maxN = 0;
if (folderObj && folderObj.children) {
	for (const f of folderObj.children) {
		const match = f.name.match(/^Lecture (\d+)/);
		if (match) {
			const n = parseInt(match[1], 10);
			if (n > maxN) maxN = n;
		}
	}
}
const nextN = maxN + 1;
const today = tp.date.now("YYYY-MM-DD");
const newTitle = `Lecture ${nextN} - ${today}`;
const courseLinkTarget = courseInfoPath.replace(/\.md$/, "");

await tp.file.rename(newTitle);
%>---
type: lecture
course: "[[<% courseLinkTarget %>|<% courseCode %>]]"
date: "<% today %>"
---
# <% newTitle %>

## Reading / Prep


## Key Terms


## Notes


## Examples / Practice


## Summary


## Questions for AI / Follow-up
- 
