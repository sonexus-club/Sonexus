#!/bin/bash

# ==========================================
# SoNexus Repository Tree Generator
# ==========================================

OUTPUT="AI/REPOSITORY_TREE.md"

mkdir -p AI

{
echo "# SoNexus Repository Tree"
echo
echo "Generated: $(date '+%Y-%m-%d %H:%M:%S')"
echo
echo '```text'

tree -a \
-I '.git|node_modules|vendor|dist|build|coverage|tmp|logs|.DS_Store'

echo '```'

} > "$OUTPUT"

echo "✅ Repository tree updated:"
echo "   $OUTPUT"
