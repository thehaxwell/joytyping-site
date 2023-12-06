export function globalVariablesRemarkPlugin() {
  // All remark and rehype plugins return a separate function
  return function (tree, file) {
    file.data.astro.frontmatter.windowsExeDownloadLink = "/guides/getting-started?dv=v0.0.0%2Fjoytyping_0.0.0_x64-setup.exe";
		file.data.astro.frontmatter.windowsMsiDownloadLink = "/guides/getting-started?dv=v0.0.0%2Fjoytyping_0.0.0_x64_en-US.msi";
		file.data.astro.frontmatter.linuxAppImageDownloadLink = "/guides/getting-started?dv=v0.0.0%2Fjoytyping_0.0.0_amd64.AppImage";
		file.data.astro.frontmatter.linuxDebDownloadLink = "/guides/getting-started?dv=v0.0.0%2Fjoytyping_0.0.0_amd64.deb";
    file.data.astro.frontmatter.vallackLayoutFileName = "vallack-layout-0.0.0";
  }
}
