export default function Footer() {
  return (
    <footer className="bg-card">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Petopia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
