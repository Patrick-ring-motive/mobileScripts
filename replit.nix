{ pkgs }: {
  deps = [
    pkgs.npm run build
    pkgs.nodejs-16_x
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}