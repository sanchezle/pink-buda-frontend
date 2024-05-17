import os

def combine_code_files(directory, output_filename, ignore_files=None, ignore_dirs=None):
    """
    Combines all code files from a specified directory into a single file, with each section
    preceded by the filename as a title.

    :param directory: Directory to search for code files.
    :param output_filename: Base name for the file to which combined code will be written. ".txt" will be added automatically.
    :param ignore_files: List of filenames to ignore.
    :param ignore_dirs: List of directory names to ignore.
    """
    if ignore_files is None:
        ignore_files = []
    if ignore_dirs is None:
        ignore_dirs = []

    # Append .txt to ensure the output is a text file
    output_file = f"{output_filename}.txt"

    with open(output_file, 'w', encoding='utf-8') as outfile:
        for root, dirs, files in os.walk(directory):
            # Modify dirs in-place to remove ignored directories during walk
            dirs[:] = [d for d in dirs if d not in ignore_dirs]

            for file in files:
                if file in ignore_files or not file.endswith(('.js', '.py', '.css', '.html')):
                    continue  # Skips files that are not code files or are in the ignore list

                file_path = os.path.join(root, file)
                outfile.write(f'--- {file} code: ---\n')
                with open(file_path, 'r', encoding='utf-8') as infile:
                    outfile.write(infile.read())
                    outfile.write('\n\n')  # Adds spacing between files in the output

# Example usage:
directory_name = input("Enter the directory name: ")
output_base_filename = input("Enter the base name for the output file (without .txt): ")
ignore_files = ['unwanted_file.js', 'example.html']  # List of files to ignore
ignore_dirs = ['node_modules', 'test_folder']  # List of directories to ignore

combine_code_files(directory_name, output_base_filename, ignore_files, ignore_dirs)
