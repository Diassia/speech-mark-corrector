# Speech Mark Corrector

Purely because the generic vertical quotation marks were driving me *crazy*! This script will:

1. Take a file name as an argument (markdown)
2. Read the markdown file
3. Convert all single quotation marks for dialogue to the correct opening and closing
4. Rewrite the corrected data to a new file

Once the file have been completed. A sentence such as this:
>'This is to test opening and closing dialogue,' he said.
>
will be converted to:
>
>‘This is to test opening and closing dialogue,’ he said.

## How to run

`npm run dev -- "./your-file-path.md"`

New corrected file will be saved in `correctedFiles` folder by default. The file will be saved with the same file name that was passed in. If a file with the specified file name already exists in the folder, it will update the file in `correctedFiles`.
